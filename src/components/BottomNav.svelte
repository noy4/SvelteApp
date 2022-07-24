<script>
  import { page } from '$app/stores'
</script>

<div class="btm-nav max-w-3xl mx-auto border-t border-t-base-200">
  <a class:active={$page.url.pathname === '/'} href="/">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      ><path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
  </a>

  <a class:active={$page.url.pathname === '/faucet'} href="/faucet">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      class="h-5 w-5"
      width="32"
      height="32"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      ><path
        fill="currentColor"
        d="M12 4c6.075 0 11 2.686 11 6v4c0 3.314-4.925 6-11 6c-5.967 0-10.824-2.591-10.995-5.823L1 14v-4c0-3.314 4.925-6 11-6zm0 12c-3.72 0-7.01-1.007-9-2.55V14c0 1.882 3.883 4 9 4c5.01 0 8.838-2.03 8.995-3.882L21 14l.001-.55C19.011 14.992 15.721 16 12 16zm0-10c-5.117 0-9 2.118-9 4c0 1.882 3.883 4 9 4s9-2.118 9-4c0-1.882-3.883-4-9-4z" /></svg>
  </a>

  <a class:active={$page.url.pathname === '/blog/guide'} href="/blog/guide">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      ><path
        fill="currentColor"
        d="M11.95 18q.525 0 .888-.363q.362-.362.362-.887t-.362-.887q-.363-.363-.888-.363t-.888.363q-.362.362-.362.887t.362.887q.363.363.888.363Zm-.9-3.85h1.85q0-.825.188-1.3q.187-.475 1.062-1.3q.65-.65 1.025-1.238q.375-.587.375-1.412q0-1.4-1.025-2.15T12.1 6q-1.425 0-2.312.75q-.888.75-1.238 1.8l1.65.65q.125-.45.563-.975Q11.2 7.7 12.1 7.7q.8 0 1.2.437q.4.438.4.963q0 .5-.3.937q-.3.438-.75.813q-1.1.975-1.35 1.475q-.25.5-.25 1.825ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4Q8.65 4 6.325 6.325Q4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z" /></svg>
  </a>
</div>

<div class="h-16" />
