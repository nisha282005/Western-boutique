const card = document.getElementById('card');
const verifyBtn = document.getElementById('verifyBtn');
const otpSection = document.getElementById('otpSection');
const continueBtn = document.getElementById('continueBtn');

function flipCard() {
  card.classList.toggle('flipped');
}

function togglePassword(id, icon) {
  const input = document.getElementById(id);
  if (input.type === 'password') {
    input.type = 'text';
    icon.classList.replace('fa-eye', 'fa-eye-slash');
  } else {
    input.type = 'password';
    icon.classList.replace('fa-eye-slash', 'fa-eye');
  }
}

function validatePassword() {
  const pwd = document.getElementById('regPassword').value;
  const errorEl = document.getElementById('passError');
  errorEl.textContent = pwd.length < 6 ? "Must contain 6 characters only." : "";
  errorEl.className = 'text-red-500 text-sm font-body mt-1'; // Use Poppins for inner error text
}

function validateRetype() {
  const pwd = document.getElementById('regPassword').value;
  const re = document.getElementById('regRetype').value;
  const errorEl = document.getElementById('retypeError');
  errorEl.textContent = (pwd && pwd !== re) ? "You have entered a wrong password, reenter." : "";
  errorEl.className = 'text-red-500 text-sm font-body mt-1';
}

function showVerifyBtn() {
  const mobile = document.getElementById('regMobile').value;
  verifyBtn.style.display = mobile.length > 0 ? 'block' : 'none';
}

function showOTP() {
  verifyBtn.style.display = 'none';
  setTimeout(() => {
    otpSection.style.display = 'block';
    otpSection.classList.add('font-body'); // Ensures inner OTP section uses Poppins
  }, 1000);
}

function moveToNext(curr, nextId) {
  if (curr.value.length === 1) {
    document.getElementById(nextId).focus();
  }
}

function checkOTP() {
  const allFilled = ['otp1', 'otp2', 'otp3', 'otp4'].every(id => document.getElementById(id).value);
  if (allFilled) continueBtn.style.display = 'block';
}

function verifyOTP() {
  continueBtn.style.display = 'none';
  const message = document.getElementById('otpMessage');
  message.textContent = 'OTP Verified';
  message.style.color = 'green';
  message.className = 'text-green-600 font-heading text-base'; // Use Roboto for heading message
}

function registerUser() {
  alert("Registered successfully!");
  flipCard();
}
