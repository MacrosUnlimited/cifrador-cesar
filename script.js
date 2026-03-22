// ─────────────────────────────────────────────
//  ALFABETO (español)
//  Incluye a-z, á é í ó ú ñ  →  29 caracteres
//  Las mayúsculas se tratan por separado
// ─────────────────────────────────────────────
const ALPHA_LOWER = 'abcdefghijklmnñopqrstuvwxyzáéíóú'; // 32 chars
const ALPHA_UPPER = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚ'; // 32 chars
const ALPHA_LEN   = ALPHA_LOWER.length;                  // 32

/**
 * Función de César.
 * @param {string} text      - Texto de entrada.
 * @param {number} shift     - Desplazamiento (1-31).
 * @param {'encrypt'|'decrypt'} direction
 * @param {boolean} keepPunctuation - Conserva espacios y puntuación si es true.
 * @returns {string}
 */
function caesarProcess(text, shift, direction, keepPunctuation) {
  const d = direction === 'encrypt' ? 1 : -1;
  let result = '';

  for (const char of text) {
    const idxLower = ALPHA_LOWER.indexOf(char);
    const idxUpper = ALPHA_UPPER.indexOf(char);

    if (idxLower !== -1) {
      // Letra minúscula (incluye tildes y ñ)
      const newIdx = ((idxLower + d * shift) % ALPHA_LEN + ALPHA_LEN) % ALPHA_LEN;
      result += ALPHA_LOWER[newIdx];
    } else if (idxUpper !== -1) {
      // Letra mayúscula (incluye tildes y Ñ)
      const newIdx = ((idxUpper + d * shift) % ALPHA_LEN + ALPHA_LEN) % ALPHA_LEN;
      result += ALPHA_UPPER[newIdx];
    } else {
      // Carácter no alfabético
      if (keepPunctuation) {
        result += char; // conservar espacios, puntuación, números, etc
      }
      // si keepPunctuation=false se omite
    }
  }

  return result;
}

// ─────────────────────────────────────────────
//  REACTIVIDAD EN TIEMPO REAL
// ─────────────────────────────────────────────
function getOptions(prefix) {
  const text      = document.getElementById(`${prefix}Input`).value;
  const shift     = parseInt(document.getElementById(`${prefix}Shift`).value, 10);
  const keepPunct = document.getElementById('keepPunctuation').checked;
  return { text, shift, keepPunct };
}

function updateOutput(prefix, direction) {
  const { text, shift, keepPunct } = getOptions(prefix);
  const output = caesarProcess(text, shift, direction, keepPunct);
  document.getElementById(`${prefix}Output`).value = output;
}

function updateSliderLabel(prefix) {
  const val = document.getElementById(`${prefix}Shift`).value;
  document.getElementById(`${prefix}ShiftValue`).textContent = val;
}

// ─────────────────────────────────────────────
//  COPIAR AL PORTAPAPELES
// ─────────────────────────────────────────────
async function copyToClipboard(outputId, btnEl) {
  const text = document.getElementById(outputId).value;
  if (!text) return;

  try {
    await navigator.clipboard.writeText(text);
    const original = btnEl.textContent;
    btnEl.textContent = '¡Copiado!';
    btnEl.classList.add('copied');
    setTimeout(() => {
      btnEl.textContent = original;
      btnEl.classList.remove('copied');
    }, 1800);
  } catch {
    // Fallback para navegadores sin Clipboard API
    const ta = document.getElementById(outputId);
    ta.select();
    document.execCommand('copy');
  }
}

// ─────────────────────────────────────────────
//  INICIALIZACIÓN
// ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Cifrador
  document.getElementById('encryptInput').addEventListener('input',  () => updateOutput('encrypt', 'encrypt'));
  document.getElementById('encryptShift').addEventListener('input',  () => {
    updateSliderLabel('encrypt');
    updateOutput('encrypt', 'encrypt');
  });

  // Descifrador
  document.getElementById('decryptInput').addEventListener('input',  () => updateOutput('decrypt', 'decrypt'));
  document.getElementById('decryptShift').addEventListener('input',  () => {
    updateSliderLabel('decrypt');
    updateOutput('decrypt', 'decrypt');
  });

  // Checkbox global de puntuación
  document.getElementById('keepPunctuation').addEventListener('change', () => {
    updateOutput('encrypt', 'encrypt');
    updateOutput('decrypt', 'decrypt');
  });

  // Botones de copiar
  document.getElementById('copyEncrypt').addEventListener('click', function () {
    copyToClipboard('encryptOutput', this);
  });
  document.getElementById('copyDecrypt').addEventListener('click', function () {
    copyToClipboard('decryptOutput', this);
  });
});
