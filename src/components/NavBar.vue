<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const state = ref({
  activeTabs: [true, false, false, false, false],
  linkMap: {
    home: 0,
    catalog: 1,
    kitchen: 2,
    profile: 3,
    authentication: 4,
  },
});

getInitialPage();

function getInitialPage() {
  const urlParts = window.location.href.split("/");
  const initialPage = urlParts[urlParts.length - 1];
  if (!initialPage) {
    addActiveLink(0);
    return;
  }
  addActiveLink(state.value.linkMap[initialPage]);
}

function addActiveLink(value) {
  state.value.activeTabs = [false, false, false, false, false];
  state.value.activeTabs[value] = true;
}
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-md sticky-top background-color-teal500">
      <div class="container-fluid justify-content-center">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav flex-grow-1">
            <RouterLink
              class="nav-link text-align-center"
              :class="{ active: state.activeTabs[0] }"
              to="/"
              @click="addActiveLink(0)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-house-door"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"
                />
              </svg>
              Home
            </RouterLink>
            <RouterLink
              class="nav-link text-align-center"
              :class="{ active: state.activeTabs[1] }"
              to="/catalog"
              @click="addActiveLink(1)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-journal-richtext"
                viewBox="0 0 16 16"
              >
                <path
                  d="M7.5 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm-.861 1.542 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047L11 4.75V7a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 7v-.5s1.54-1.274 1.639-1.208zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"
                />
                <path
                  d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"
                />
                <path
                  d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"
                />
              </svg>
              Catalog
            </RouterLink>
            <RouterLink
              class="nav-link text-align-center"
              :class="{ active: state.activeTabs[2] }"
              to="/kitchen"
              @click="addActiveLink(2)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.0"
                width="18.000000px"
                height="18.000000px"
                viewBox="0 0 512.000000 512.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                  fill="currentColor"
                  stroke="none"
                >
                  <path
                    d="M1968 5024 c-118 -28 -208 -96 -208 -155 0 -31 70 -104 1017 -1051 l1018 -1018 -1420 -2 -1420 -3 -50 -25 c-64 -32 -124 -92 -155 -155 -19 -40 -24 -66 -24 -135 -1 -74 3 -92 27 -137 36 -69 88 -120 154 -150 l53 -24 0 -245 0 -244 -95 0 c-88 0 -98 2 -120 25 -35 34 -33 69 5 85 68 28 130 129 130 210 0 92 -80 202 -166 228 -56 16 -412 16 -468 0 -86 -26 -166 -136 -166 -228 0 -81 62 -182 130 -210 30 -12 30 -13 30 -89 0 -236 144 -428 365 -486 40 -10 107 -15 207 -15 l148 0 0 -303 c0 -172 5 -329 11 -363 35 -194 186 -361 389 -430 52 -18 107 -19 1200 -19 1093 0 1148 1 1200 19 182 62 305 181 372 363 21 54 22 79 26 396 l3 337 148 0 c100 0 166 5 206 15 221 58 365 250 365 486 0 76 0 77 30 89 68 28 130 129 130 210 0 92 -80 202 -166 228 -56 16 -412 16 -468 0 -86 -26 -166 -136 -166 -228 0 -81 62 -182 130 -210 38 -16 40 -51 5 -85 -22 -23 -32 -25 -120 -25 l-95 0 0 244 0 245 53 24 c66 30 118 81 154 150 24 45 28 64 28 137 0 73 -4 92 -28 137 -15 29 -43 69 -63 89 -38 37 -125 84 -158 84 -14 0 -17 5 -12 23 32 118 28 248 -13 408 -58 218 -202 487 -401 745 l-78 101 67 67 c63 63 69 66 95 56 69 -26 163 -7 226 47 57 49 80 101 80 183 0 54 -5 74 -29 115 -39 67 -382 405 -441 436 -116 59 -266 5 -321 -116 -21 -44 -25 -129 -9 -171 10 -26 7 -32 -56 -95 l-67 -67 -101 78 c-424 327 -852 489 -1118 424z m362 -183 c482 -163 1036 -621 1381 -1144 202 -305 296 -547 287 -740 -2 -48 -9 -92 -14 -97 -6 -6 -367 348 -1014 995 -1142 1142 -1048 1028 -845 1022 92 -3 126 -9 205 -36z m1433 -199 c176 -176 187 -189 187 -224 0 -48 -30 -78 -79 -78 -32 0 -50 15 -223 188 -167 167 -188 192 -188 221 0 61 37 96 90 85 15 -3 99 -79 213 -192z m-170 -394 l-58 -58 -112 112 -113 113 57 57 58 58 112 -112 113 -113 -57 -57z m573 -1634 c53 -39 69 -71 69 -134 0 -63 -16 -95 -69 -134 -27 -21 -30 -21 -1584 -24 -1073 -2 -1568 0 -1594 8 -101 29 -140 168 -71 251 53 62 -55 59 1655 56 1565 -2 1567 -2 1594 -23z m-168 -1261 l-3 -808 -32 -67 c-44 -93 -100 -151 -191 -196 l-76 -37 -1136 0 -1136 0 -76 37 c-91 45 -147 103 -191 196 l-32 67 -3 808 -3 807 1441 0 1441 0 -3 -807z m-3303 702 c16 -15 25 -36 25 -55 0 -19 -9 -40 -25 -55 -24 -25 -26 -25 -215 -25 -189 0 -191 0 -215 25 -16 15 -25 36 -25 55 0 19 9 40 25 55 24 25 26 25 215 25 189 0 191 0 215 -25z m4160 0 c16 -15 25 -36 25 -55 0 -19 -9 -40 -25 -55 -24 -25 -26 -25 -215 -25 -189 0 -191 0 -215 25 -16 15 -25 36 -25 55 0 19 9 40 25 55 24 25 26 25 215 25 189 0 191 0 215 -25z m-4295 -311 c0 -77 88 -189 166 -212 23 -7 85 -12 138 -12 l96 0 0 -81 0 -81 -162 4 c-153 4 -166 5 -214 30 -75 39 -107 70 -144 139 -27 51 -33 75 -38 145 l-5 84 82 0 c68 0 81 -3 81 -16z m4158 -67 c-9 -133 -61 -219 -170 -278 l-63 -34 -162 -3 -163 -4 0 81 0 81 96 0 c53 0 115 5 138 12 78 23 166 135 166 212 0 13 13 16 81 16 l82 0 -5 -83z"
                  />
                  <path
                    d="M3760 1185 c0 -464 -3 -582 -14 -608 -17 -43 -68 -85 -111 -93 l-35 -6 0 -80 0 -80 47 7 c53 8 125 41 170 79 16 14 45 53 64 88 l34 63 3 603 3 602 -81 0 -80 0 0 -575z"
                  />
                  <path
                    d="M1364 4118 c-101 -104 -125 -139 -148 -217 -20 -69 -20 -133 0 -202 22 -74 46 -111 130 -200 91 -96 109 -149 83 -244 -8 -30 -36 -65 -107 -138 l-96 -98 57 -57 57 -57 85 85 c99 98 137 153 159 229 20 69 20 133 0 202 -22 74 -46 112 -126 194 -75 78 -98 123 -98 187 1 66 30 115 124 208 47 46 86 89 86 95 0 14 -92 105 -106 105 -6 0 -51 -42 -100 -92z"
                  />
                  <path
                    d="M2084 4118 c-101 -104 -125 -139 -148 -217 -20 -69 -20 -133 0 -202 22 -74 46 -111 130 -200 91 -96 109 -149 83 -244 -8 -30 -36 -65 -107 -138 l-96 -98 57 -57 57 -57 85 85 c99 98 137 153 159 229 20 69 20 133 0 202 -22 74 -46 112 -126 194 -75 78 -98 123 -98 187 1 66 30 115 124 208 47 46 86 89 86 95 0 14 -92 105 -106 105 -6 0 -51 -42 -100 -92z"
                  />
                </g>
              </svg>
              Kitchen</RouterLink
            >
            <RouterLink
              class="nav-link text-align-center"
              :class="{ active: state.activeTabs[3] }"
              to="/profile"
              @click="addActiveLink(3)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
                />
              </svg>
              Profile
            </RouterLink>
            <RouterLink
              class="nav-link text-align-center"
              :class="{ active: state.activeTabs[4] }"
              to="/authentication"
              @click="addActiveLink(4)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-box-arrow-in-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
                />
                <path
                  fill-rule="evenodd"
                  d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                />
              </svg>
              Login
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.background-color-teal500 {
  background-color: #fd9843;
}

.container-fluid {
  width: 0%;
}

.justify-content-center {
  justify-content: center;
}

.navbar-toggler {
  color: white;
  border-color: white;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='white' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>");
}

a {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  &:hover {
    color: white;
  }
}

.text-align-center {
  text-align: center;
}

svg {
  margin-right: 5px;
}
</style>
