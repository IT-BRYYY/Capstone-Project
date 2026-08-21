// auth.js — show/hide password toggle + smooth page transitions
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

// Smooth page-to-page navigation using the View Transitions API
// (supported in Chrome/Edge; gracefully falls back to normal navigation elsewhere)
if (document.startViewTransition) {
    document.addEventListener('click', function (e) {
        var link = e.target.closest('a[href]');
        if (!link) return;
        if (link.target === '_blank' || link.href.startsWith('#')) return;
        if (link.href.startsWith('mailto:') || link.href.startsWith('tel:')) return;

        e.preventDefault();
        document.startViewTransition(function () {
            window.location.href = link.href;
        });
    });
}