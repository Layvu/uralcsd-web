export function getAbsoluteImagePath(url: string): string {
    console.log(url);
    // Проверяем, что URL относительный
    if (url.startsWith("/")) {
        const apiUrl = import.meta.env.VITE_PUBLIC_API_URL;
  
        return `${apiUrl}${url}`;
    }
  
    // Если URL абсолютный — возвращаем как есть
    return url;
}
  