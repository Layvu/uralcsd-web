export const proseedBackendText = (text: string) : string => {
    // Обрабатываем жирный текст
    let processedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Обрабатываем ссылки
    processedText = processedText.replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer" class="underlined">$1</a>'
    );
    return processedText;
};