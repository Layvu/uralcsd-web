import fs from 'fs';
import path from 'path';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

// Загружаем переменные окружения из .env
dotenv.config();

// Определяем __dirname для ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Проверка наличия необходимых переменных окружения
const API_URL = process.env.VITE_PUBLIC_API_URL;
const API_KEY = process.env.VITE_STRAPI_API_KEY;

if (!API_URL || !API_KEY) {
    console.error('Missing VITE_PUBLIC_API_URL or VITE_STRAPI_API_KEY in .env');
    process.exit(1);
}

// Создаём instance axios
const apiClient = axios.create({
    baseURL: `${API_URL}/api`,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
    },
});

// Типизация данных маршрутов
interface RouteItem {
    slug: string;
}

async function fetchPerformancesSlugsApi(): Promise<RouteItem[]> {
    try {
        const response = await apiClient.get('/performances', {
            params: {
                fields: ['slug'], // Запрашиваем только slug
            },
        });
        return response.data.data;
    } catch (error) {
        console.error('Error fetching performances:', error);
        throw error;
    }
}

async function fetchTeamSlugsApi(): Promise<RouteItem[]> {
    try {
        const response = await apiClient.get('/members', {
            params: {
                fields: ['slug'],
            },
        });
        return response.data.data;
    } catch (error) {
        console.error('Error fetching team members:', error);
        throw error;
    }
}

async function fetchProjectsSlugsApi(): Promise<RouteItem[]> {
    try {
        const response = await apiClient.get('/projects', {
            params: {
                fields: ['slug'],
            },
        });
        return response.data.data;
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw error;
    }
}

async function generateRoutes() {
    // Статические маршруты
    const routes = ['/', '/performances', '/team', '/projects', '/afisha', '/about', '/contacts'];

    try {
        // Получаем данные с API
        const [performances, team, projects] = await Promise.all([
            fetchPerformancesSlugsApi(),
            fetchTeamSlugsApi(),
            fetchProjectsSlugsApi(),
        ]);

        // Добавляем динамические маршруты
        performances.forEach((performance) => routes.push(`/performances/${performance.slug}`));
        team.forEach((member) => routes.push(`/team/${member.slug}`));
        projects.forEach((project) => routes.push(`/projects/${project.slug}`));

        // Читаем текущий package.json
        const packageJsonPath = path.resolve(__dirname, 'package.json');
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

        // Обновляем reactSnap.include
        packageJson.reactSnap = packageJson.reactSnap || {};
        packageJson.reactSnap.include = routes;

        // Сохраняем обновлённый package.json
        fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

        return routes;
    } catch (error) {
        console.error('Error fetching routes from API:', error);

        // Читаем текущий package.json для fallback
        const packageJsonPath = path.resolve(__dirname, '../package.json');
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

        // Обновляем reactSnap.include с fallback маршрутами
        packageJson.reactSnap = packageJson.reactSnap || {};
        packageJson.reactSnap.include = routes;

        // Сохраняем обновлённый package.json
        fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

        return routes;
    }
}

generateRoutes();
