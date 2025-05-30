export const proseedBackendText = (text: string): string => {
    // Обрабатываем жирный текст (**text**)
    let processedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Обрабатываем курсив (_text_ или *text*)
    processedText = processedText.replace(/_([^_]+)_/g, '<em>$1</em>');
    processedText = processedText.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    
    // Обрабатываем ссылки ([text](url))
    processedText = processedText.replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer" class="underlined">$1</a>'
    );
    // Обрабатываем подчеркивание (<u>text</u> или __text__)
    processedText = processedText.replace(/<u>(.*?)<\/u>/g, '<u>$1</u>');
    processedText = processedText.replace(/__([^__]+)__/g, '<u>$1</u>');
    
    // Обрабатываем зачеркивание (~~text~~)
    processedText = processedText.replace(/~~(.*?)~~/g, '<s>$1</s>');
   
    return processedText;
};