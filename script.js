const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');
const copyBtn = document.getElementById('copyBtn');
const resultContainer = document.getElementById('resultContainer');

const encryptionRules = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

function encrypt(text) {
    return text.split('').map(char => encryptionRules[char] || char).join('');
}

function decrypt(text) {
    let decrypted = text;
    Object.entries(encryptionRules).forEach(([key, value]) => {
        decrypted = decrypted.split(value).join(key);
    });
    return decrypted;
}

function showResult(text) {
    resultContainer.style.display = 'none';
    outputText.style.display = 'block';
    outputText.value = text;
    copyBtn.style.display = 'block';
}

encryptBtn.addEventListener('click', () => {
    const text = inputText.value.toLowerCase();
    if (text) {
        showResult(encrypt(text));
    }
});

decryptBtn.addEventListener('click', () => {
    const text = inputText.value.toLowerCase();
    if (text) {
        showResult(decrypt(text));
    }
});

copyBtn.addEventListener('click', () => {
    outputText.select();
    document.execCommand('copy');
    copyBtn.textContent = '¡Copiado!';
    setTimeout(() => {
        copyBtn.textContent = 'Copiar';
    }, 2000);
});

inputText.addEventListener('input', () => {
    if (!inputText.value) {
        resultContainer.style.display = 'block';
        outputText.style.display = 'none';
        copyBtn.style.display = 'none';
    }
});