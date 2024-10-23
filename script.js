const imageInput = document.getElementById('imageInput');
const customMessage = document.getElementById('customMessage');
const generateButton = document.getElementById('generateButton');
const canvas = document.getElementById('pixelCanvas');
const ctx = canvas.getContext('2d');
const messageParagraph = document.getElementById('message');

generateButton.addEventListener('click', () => {
    const file = imageInput.files[0];
    const message = customMessage.value;

    if (file && message) {
        const img = new Image();
        img.src = URL.createObjectURL(file);

        img.onload = () => {
            const pixelSize = 10;  // Define o tamanho dos pixels
            const scale = 0.1;  // Reduz a imagem para criar o efeito de pixel art

            canvas.width = img.width * scale;
            canvas.height = img.height * scale;

            // Desenha a imagem em uma escala reduzida
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            // Obtém os dados da imagem e redimensiona para o tamanho original
            const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            canvas.width = img.width;
            canvas.height = img.height;

            // Desenha os pixels ampliados
            for (let y = 0; y < imgData.height; y++) {
                for (let x = 0; x < imgData.width; x++) {
                    const index = (y * imgData.width + x) * 4;
                    const r = imgData.data[index];
                    const g = imgData.data[index + 1];
                    const b = imgData.data[index + 2];

                    ctx.fillStyle = `rgb(${r},${g},${b})`;
                    ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
                }
            }

            // Exibe a mensagem personalizada
            messageParagraph.textContent = message;
        };
    } else {
        alert('Please upload an image and enter a message.');
    }
});