// auth.js — show/hide password toggle
// Wrap a password input like this and it just works:
//
// <div class="password-field">
//   <input type="password" ...>
//   <button type="button" class="toggle-pass" aria-label="Show password">
//     <svg class="icon-eye" ...>...</svg>
//     <svg class="icon-eye-off" ...>...</svg>
//   </button>
// </div>

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.toggle-pass').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var field = btn.closest('.password-field');
            var input = field.querySelector('input');
            var isHidden = input.type === 'password';

            input.type = isHidden ? 'text' : 'password';
            btn.classList.toggle('is-visible', isHidden);
            btn.setAttribute('aria-label', isHidden ? 'Hide password' : 'Show password');
        });
    });
});