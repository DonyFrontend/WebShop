import { Link } from "react-router-dom";

function CardPage() {
    return (
        <>
            <div className="flex justify-center pt-5">
                <svg width="448" height="328" viewBox="0 0 448 328" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M329.631 243.902C289.942 243.902 254.858 246.841 233.408 251.36C213.675 244.264 187.456 239.943 158.672 239.943C97.3196 239.943 47.583 259.589 47.583 283.829C47.583 308.068 97.3196 327.714 158.672 327.714C220.024 327.714 269.761 308.068 269.761 283.829C269.761 281.476 269.275 279.173 268.379 276.919C286.244 278.55 307.21 279.496 329.631 279.496C394.955 279.496 447.891 271.528 447.891 261.706C447.904 251.858 394.955 243.902 329.631 243.902Z" fill="#EDEEF2" />
                    <path d="M254.287 259.738C250.651 259.738 247.277 256.178 246.767 251.808L232.4 130.174C231.877 125.804 235.002 122.256 239.359 122.256H419.93C424.275 122.256 427.4 125.804 426.889 130.174L412.522 251.808C412 256.178 408.626 259.738 405.003 259.738H254.287Z" fill="#F6F6F6" />
                    <path d="M419.631 124.995C422.47 124.995 424.512 127.323 424.188 130.187L410.219 251.821C409.896 254.684 407.68 257.012 405.289 257.012H253.988C251.597 257.012 249.394 254.684 249.058 251.821L235.089 130.187C234.765 127.323 236.807 124.995 239.646 124.995H419.631ZM420.216 119.53H239.061C233.184 119.53 228.989 124.31 229.698 130.187L244.464 251.821C245.173 257.697 249.718 262.477 254.585 262.477H404.692C409.559 262.477 414.091 257.697 414.813 251.821L429.579 130.187C430.288 124.31 426.093 119.53 420.216 119.53Z" fill="#3C4242" />
                    <path d="M419.631 124.995H393.486L386.091 220.87C385.867 223.734 383.663 226.062 381.173 226.062H246.106L249.069 251.808C249.406 254.671 251.609 257 254 257H405.289C407.679 257 409.883 254.671 410.219 251.808L424.187 130.174C424.511 127.311 422.469 124.995 419.631 124.995Z" fill="#EDEEF2" />
                    <path d="M419.631 124.995H409.858L399.176 235.337C398.902 238.2 396.686 240.529 394.234 240.529H247.763L249.057 251.821C249.394 254.684 251.597 257.012 253.988 257.012H405.277C407.667 257.012 409.871 254.684 410.207 251.821L424.175 130.187C424.511 127.311 422.47 124.995 419.631 124.995Z" fill="#8A33FD" />
                    <path d="M245.994 155.472L252.207 214.733" stroke="white"  />
                    <path d="M278.961 241.076C279.073 242.633 278.09 243.902 276.758 243.902H270.359C269.039 243.902 267.844 242.633 267.707 241.076L261.407 168.582C261.27 167.013 262.353 165.756 263.835 165.756H270.931C272.413 165.756 273.683 167.013 273.795 168.582L278.961 241.076Z" fill="#BEBCBD" stroke="#3C4242"  />
                    <path d="M307.11 241.076C307.16 242.633 306.127 243.902 304.795 243.902H298.395C297.063 243.902 295.93 242.633 295.856 241.076L292.42 168.582C292.345 167.013 293.478 165.756 294.947 165.756H302.043C303.512 165.756 304.757 167.013 304.807 168.582L307.11 241.076Z" fill="#BEBCBD" stroke="#3C4242"  />
                    <path d="M335.258 241.076C335.246 242.633 334.163 243.902 332.831 243.902H326.444C325.112 243.902 324.029 242.633 324.016 241.076L323.443 168.582C323.431 167.013 324.614 165.756 326.083 165.756H333.179C334.661 165.756 335.843 167.013 335.831 168.582L335.258 241.076Z" fill="#BEBCBD" stroke="#3C4242"  />
                    <path d="M363.408 241.076C363.333 242.633 362.2 243.902 360.868 243.902H354.469C353.137 243.902 352.103 242.633 352.153 241.076L354.444 168.582C354.494 167.013 355.726 165.756 357.208 165.756H364.304C365.773 165.756 366.918 167.013 366.844 168.582L363.408 241.076Z" fill="#BEBCBD" stroke="#3C4242"  />
                    <path d="M391.556 241.076C391.419 242.633 390.237 243.902 388.904 243.902H382.505C381.173 243.902 380.19 242.633 380.302 241.076L385.456 168.582C385.568 167.013 386.85 165.756 388.319 165.756H395.416C396.885 165.756 397.98 167.013 397.843 168.582L391.556 241.076Z" fill="#BEBCBD" stroke="#3C4242"  />
                    <path d="M265.928 128.929C265.131 130.162 263.487 130.523 262.267 129.726L256.329 125.904C255.096 125.107 254.735 123.464 255.532 122.244L292.358 64.9626C293.155 63.7301 294.799 63.3815 296.031 64.1659L301.97 67.9755C303.202 68.7722 303.563 70.4156 302.766 71.6481L265.928 128.929Z" fill="#BEBCBD"  />
                    <path d="M393.338 128.929C394.135 130.162 395.778 130.523 397.011 129.726L402.949 125.904C404.182 125.107 404.53 123.464 403.746 122.244L366.92 64.9626C366.123 63.7301 364.48 63.3815 363.26 64.1659L357.321 67.9755C356.089 68.7722 355.728 70.4156 356.524 71.6481L393.338 128.929Z" fill="#BEBCBD"  />
                    <path d="M227.159 148.525C222.963 148.525 219.552 145.114 219.552 140.918V126.078C219.552 121.883 222.963 118.472 227.159 118.472H432.106C436.301 118.472 439.713 121.883 439.713 126.078V140.918C439.713 145.114 436.301 148.525 432.106 148.525H227.159Z" fill="#F6F6F6" />
                    <path d="M432.118 121.198C434.82 121.198 436.998 123.377 436.998 126.078V140.918C436.998 143.608 434.82 145.799 432.118 145.799H227.158C224.469 145.799 222.278 143.62 222.278 140.918V126.078C222.278 123.389 224.469 121.198 227.158 121.198H432.118ZM432.118 115.733H227.158C221.456 115.733 216.812 120.376 216.812 126.078V140.918C216.812 146.62 221.456 151.264 227.158 151.264H432.106C437.807 151.264 442.451 146.62 442.451 140.918V126.078C442.464 120.376 437.82 115.733 432.118 115.733Z" fill="#3C4242" />
                    <path d="M432.118 121.198H422.358V128.618C422.358 131.32 420.179 133.498 417.477 133.498H222.278V140.918C222.278 143.608 224.469 145.799 227.159 145.799H432.106C434.807 145.799 436.986 143.62 436.986 140.918V126.078C436.999 123.389 434.807 121.198 432.118 121.198Z" fill="#8A33FD" />
                    <path d="M69.7069 186.858C69.2836 186.858 68.8478 186.758 68.4619 186.559L42.3797 173.25C41.4211 172.765 40.836 171.744 40.8858 170.673C40.948 169.59 41.6327 168.656 42.6287 168.27L131.594 134.071C131.906 133.947 132.242 133.884 132.578 133.884C132.877 133.884 133.188 133.934 133.474 134.034L155.747 141.765C156.842 142.151 157.589 143.184 157.589 144.342V151.389C157.589 152.522 156.892 153.53 155.834 153.941L70.6779 186.684C70.3667 186.796 70.043 186.858 69.7069 186.858Z" fill="#EDEEF2" />
                    <path d="M132.59 136.623L154.863 144.355V151.401L69.7067 184.144L43.6245 170.823L132.59 136.623ZM132.59 131.158C131.918 131.158 131.258 131.282 130.623 131.519L41.6699 165.718C39.653 166.49 38.2836 168.382 38.1715 170.536C38.0595 172.69 39.2173 174.707 41.147 175.69L67.2292 188.999C68.001 189.398 68.8601 189.597 69.7191 189.597C70.3789 189.597 71.0512 189.472 71.6862 189.236L156.842 156.493C158.959 155.684 160.341 153.654 160.341 151.389V144.342C160.341 142.014 158.872 139.935 156.668 139.175L134.395 131.444C133.81 131.257 133.2 131.158 132.59 131.158Z" fill="#3C4242" />
                    <path d="M85.095 178.205L68.0016 170.026L145.987 141.255L132.591 136.623L43.625 170.823L69.7072 184.131L85.095 178.205Z" fill="#BEBCBD" />
                    <path d="M247.638 186.858C247.302 186.858 246.978 186.796 246.655 186.671L161.499 153.928C160.44 153.517 159.743 152.509 159.743 151.376V144.33C159.743 143.159 160.478 142.126 161.586 141.753L183.858 134.021C184.145 133.922 184.456 133.872 184.755 133.872C185.091 133.872 185.414 133.934 185.738 134.059L274.704 168.258C275.712 168.644 276.397 169.59 276.447 170.661C276.509 171.744 275.924 172.752 274.965 173.238L248.883 186.547C248.497 186.758 248.074 186.858 247.638 186.858Z" fill="#EDEEF2" />
                    <path d="M184.755 136.623L273.72 170.823L247.638 184.131L162.482 151.389V144.342L184.755 136.623ZM184.755 131.158C184.145 131.158 183.547 131.257 182.962 131.457L160.689 139.188C158.486 139.947 157.017 142.026 157.017 144.355V151.401C157.017 153.667 158.411 155.696 160.527 156.505L245.684 189.248C246.318 189.497 246.978 189.609 247.651 189.609C248.51 189.609 249.356 189.41 250.141 189.012L276.223 175.703C278.14 174.719 279.31 172.703 279.198 170.549C279.086 168.395 277.717 166.503 275.7 165.731L186.734 131.531C186.087 131.27 185.414 131.158 184.755 131.158Z" fill="#3C4242" />
                    <path d="M232.25 178.205L249.356 170.026L171.358 141.255L184.754 136.623L273.72 170.823L247.638 184.131L232.25 178.205Z" fill="#BEBCBD" />
                    <path d="M247.638 276.869C247.302 276.869 246.978 276.807 246.655 276.683L157.689 242.483C156.631 242.072 155.934 241.064 155.934 239.931V150.965C155.934 150.069 156.382 149.222 157.116 148.712C157.577 148.401 158.112 148.226 158.66 148.226C158.996 148.226 159.32 148.289 159.644 148.413L248.609 182.612C249.668 183.023 250.365 184.032 250.365 185.165V274.13C250.365 275.027 249.917 275.873 249.182 276.384C248.721 276.707 248.186 276.869 247.638 276.869Z" fill="#BEBCBD" />
                    <path d="M158.672 150.965L247.638 185.165V274.13L158.672 239.931V150.965ZM158.672 145.5C157.577 145.5 156.506 145.824 155.572 146.459C154.091 147.479 153.207 149.16 153.207 150.965V239.931C153.207 242.197 154.601 244.226 156.705 245.035L245.671 279.235C246.306 279.484 246.966 279.596 247.638 279.596C248.734 279.596 249.804 279.272 250.738 278.637C252.22 277.616 253.104 275.936 253.104 274.13V185.165C253.104 182.899 251.709 180.87 249.593 180.06L160.627 145.861C160.005 145.624 159.332 145.5 158.672 145.5Z" fill="#3C4242" />
                    <path d="M227.109 177.272L158.673 206.466V239.931L247.639 274.143V185.165L227.109 177.272Z" fill="#8A33FD" />
                    <path d="M158.673 312.351C158.125 312.351 157.59 312.189 157.129 311.865C156.382 311.355 155.946 310.508 155.946 309.612V220.646C155.946 219.513 156.643 218.505 157.702 218.094L246.667 183.895C246.979 183.77 247.315 183.708 247.651 183.708C248.199 183.708 248.734 183.87 249.195 184.194C249.942 184.704 250.377 185.551 250.377 186.447V275.413C250.377 276.546 249.68 277.554 248.622 277.965L159.656 312.164C159.333 312.289 159.009 312.351 158.673 312.351Z" fill="#EDEEF2" />
                    <path d="M247.638 186.447V275.413L158.672 309.612V220.646L247.638 186.447ZM247.638 180.982C246.978 180.982 246.306 181.106 245.671 181.343L156.705 215.542C154.589 216.351 153.207 218.381 153.207 220.646V309.612C153.207 311.417 154.091 313.098 155.572 314.119C156.494 314.754 157.577 315.078 158.672 315.078C159.332 315.078 160.005 314.953 160.64 314.716L249.605 280.517C251.722 279.708 253.116 277.679 253.116 275.413V186.447C253.116 184.642 252.232 182.961 250.751 181.94C249.804 181.305 248.734 180.982 247.638 180.982Z" fill="#3C4242" />
                    <path d="M232.251 192.373V262.589L158.673 290.875V309.625L247.639 275.413V186.447L232.251 192.373Z" fill="#BEBCBD" />
                    <path d="M69.706 276.869C69.1582 276.869 68.6229 276.707 68.1622 276.384C67.4152 275.873 66.9795 275.027 66.9795 274.13V185.165C66.9795 184.032 67.6767 183.023 68.7349 182.612L157.701 148.413C158.012 148.289 158.348 148.226 158.684 148.226C159.232 148.226 159.767 148.388 160.228 148.712C160.975 149.222 161.411 150.069 161.411 150.965V239.931C161.411 241.064 160.713 242.072 159.655 242.483L70.6895 276.683C70.3658 276.807 70.0421 276.869 69.706 276.869Z" fill="#EDEEF2" />
                    <path d="M158.672 150.965V239.931L69.7064 274.13V185.165L158.672 150.965ZM158.672 145.5C158.012 145.5 157.352 145.624 156.705 145.861L67.7393 180.06C65.6229 180.87 64.2285 182.899 64.2285 185.165V274.13C64.2285 275.936 65.1124 277.616 66.594 278.637C67.5152 279.272 68.5984 279.596 69.6939 279.596C70.3538 279.596 71.0261 279.471 71.661 279.235L160.627 245.035C162.743 244.226 164.125 242.197 164.125 239.931V150.965C164.125 149.16 163.241 147.479 161.76 146.459C160.851 145.824 159.768 145.5 158.672 145.5Z" fill="#3C4242" />
                    <path d="M146.06 155.821V230.631L69.7061 259.987V274.143L158.672 239.931V150.965L146.06 155.821Z" fill="#BEBCBD" />
                    <path d="M158.671 312.351C158.335 312.351 158.012 312.289 157.688 312.164L68.7222 277.965C67.664 277.554 66.9668 276.546 66.9668 275.413V186.447C66.9668 185.551 67.415 184.704 68.1495 184.194C68.6102 183.882 69.1455 183.708 69.6933 183.708C70.0294 183.708 70.3531 183.77 70.6768 183.895L159.643 218.094C160.701 218.505 161.398 219.513 161.398 220.646V309.612C161.398 310.508 160.95 311.355 160.215 311.865C159.755 312.189 159.219 312.351 158.671 312.351Z" fill="#8A33FD" />
                    <path d="M69.7066 186.447L158.672 220.646V309.612L69.7066 275.413V186.447ZM69.7066 180.982C68.6111 180.982 67.5404 181.305 66.6067 181.94C65.1251 182.961 64.2412 184.642 64.2412 186.447V275.413C64.2412 277.679 65.6356 279.708 67.752 280.517L156.718 314.716C157.353 314.965 158.012 315.078 158.685 315.078C159.78 315.078 160.851 314.754 161.785 314.119C163.266 313.098 164.15 311.417 164.15 309.612V220.646C164.15 218.381 162.756 216.351 160.652 215.542L71.6861 181.343C71.0388 181.106 70.3665 180.982 69.7066 180.982Z" fill="#3C4242" />
                    <path d="M144.566 215.231V288.672L69.7061 259.888V275.413L158.672 309.625V220.646L144.566 215.231Z" fill="#BEBCBD" />
                    <path d="M176.836 249.99C175.952 249.99 175.105 249.567 174.583 248.795L160.228 227.768C159.917 227.319 159.755 226.772 159.755 226.224V219.177C159.755 218.044 160.452 217.036 161.51 216.625L246.666 183.882C246.99 183.758 247.314 183.696 247.65 183.696C248.534 183.696 249.38 184.131 249.903 184.891L268.067 211.496C268.541 212.181 268.665 213.052 268.416 213.849C268.167 214.646 267.569 215.281 266.785 215.592L177.819 249.791C177.496 249.941 177.16 249.99 176.836 249.99Z" fill="#EDEEF2" />
                    <path d="M247.638 186.447L265.802 213.052L176.836 247.251L162.482 226.224V219.177L247.638 186.447ZM247.638 180.982C246.978 180.982 246.318 181.106 245.683 181.343L160.515 214.085C158.398 214.895 157.004 216.924 157.004 219.19V226.236C157.004 227.332 157.34 228.415 157.95 229.311L172.305 250.339C173.35 251.87 175.056 252.729 176.824 252.729C177.484 252.729 178.144 252.605 178.778 252.368L267.744 218.169C269.3 217.571 270.508 216.289 271.006 214.695C271.504 213.102 271.243 211.371 270.309 209.989L252.145 183.384C251.111 181.841 249.406 180.982 247.638 180.982Z" fill="#3C4242" />
                    <path d="M232.249 192.373L240.242 204.138L166.664 232.436L176.835 247.264L265.801 213.065L247.637 186.447L232.249 192.373Z" fill="#BEBCBD" />
                    <path d="M140.508 249.99C140.185 249.99 139.848 249.928 139.525 249.804L50.5591 215.604C49.7747 215.305 49.1772 214.671 48.9282 213.861C48.6792 213.064 48.8037 212.193 49.2768 211.508L67.4409 184.903C67.9638 184.144 68.8104 183.708 69.6943 183.708C70.018 183.708 70.3541 183.77 70.6778 183.895L156.606 216.936C157.664 217.347 158.361 218.356 158.361 219.489V225.103C158.361 225.651 158.199 226.187 157.888 226.647L142.762 248.82C142.251 249.567 141.392 249.99 140.508 249.99Z" fill="#EDEEF2" />
                    <path d="M69.7069 186.447L155.635 219.489V225.103L140.508 247.276L51.5427 213.077L69.7069 186.447ZM69.7069 180.982C67.939 180.982 66.2334 181.841 65.1876 183.372L47.0359 209.977C46.0898 211.359 45.8408 213.089 46.3388 214.683C46.8367 216.277 48.0319 217.559 49.6006 218.156L138.566 252.356C139.201 252.605 139.873 252.717 140.521 252.717C142.289 252.717 143.994 251.858 145.04 250.327L160.167 228.154C160.789 227.245 161.113 226.174 161.113 225.078V219.464C161.113 217.198 159.718 215.168 157.602 214.359L71.6739 181.318C71.0266 181.106 70.3667 180.982 69.7069 180.982Z" fill="#3C4242" />
                    <path d="M85.095 192.373L77.1147 204.138L150.693 232.436L140.509 247.264L51.543 213.065L69.7071 186.447L85.095 192.373Z" fill="#BEBCBD" />
                    <path d="M162.182 171.395C161.049 171.395 160.004 170.686 159.605 169.578L139.947 114.413L24.6005 122.816C24.5382 122.816 24.4635 122.829 24.4013 122.829C19.0105 122.829 14.6158 118.496 14.5162 113.118L2.73877 12.9353C2.72632 12.8357 2.71387 12.7236 2.71387 12.6116C2.71387 7.1586 7.14597 2.7265 12.5989 2.7265C12.6612 2.7265 12.711 2.7265 12.7732 2.7265L175.367 13.0473C180.77 13.0971 185.152 17.5043 185.152 22.9199V101.938C185.152 107.354 180.782 111.761 175.379 111.811L164.909 112.57V168.644C164.909 169.976 163.95 171.109 162.643 171.333C162.494 171.383 162.344 171.395 162.182 171.395Z" fill="#F6F6F6" />
                    <path d="M12.6116 5.46543L175.292 15.7987C179.239 15.7987 182.438 18.9983 182.438 22.9448V101.963C182.438 105.91 179.239 109.109 175.292 109.109L162.195 110.068V168.681L141.84 111.549L24.4139 120.102C20.4673 120.102 17.2678 116.903 17.2678 112.956L5.47787 12.624C5.46542 8.665 8.66501 5.46543 12.6116 5.46543ZM12.6116 0C5.65217 0 0 5.66462 0 12.624C0 12.8357 0.0124482 13.0473 0.0373476 13.259L11.8023 113.305C12.0015 120.09 17.579 125.555 24.4139 125.555C24.5508 125.555 24.6753 125.555 24.8123 125.543L138.08 117.289L157.041 170.499C157.825 172.703 159.904 174.134 162.182 174.134C162.494 174.134 162.805 174.109 163.116 174.06C165.731 173.611 167.648 171.333 167.648 168.669V115.135L175.504 114.562C182.351 114.438 187.891 108.835 187.891 101.951V22.9324C187.891 16.0477 182.339 10.4329 175.479 10.3208L12.9602 0.0124524C12.8481 2.65983e-06 12.7361 0 12.6116 0Z" fill="#3C4242" />
                    <path d="M41.5319 16.0851L21.9485 14.8401C18.4501 14.8401 15.624 17.6786 15.624 21.1645L21.3633 70.0048" stroke="#3C4242"  />
                    <path d="M175.292 15.7862L163.976 15.0641V85.8657C163.976 89.8123 160.776 93.0118 156.83 93.0118L147.828 93.6717L147.032 93.7339L143.72 93.9705L16.1104 103.27L17.2557 112.944C17.2557 116.89 20.4553 120.09 24.4019 120.09L141.828 111.537L143.732 116.866L162.195 168.669V110.056L175.292 109.097C179.239 109.097 182.439 105.897 182.439 101.951V22.9324C182.439 18.9858 179.239 15.7862 175.292 15.7862Z" fill="#8A33FD" />
                    <path d="M175.292 15.7863L172.018 15.5746V94.5058C172.018 98.4524 168.818 101.652 164.872 101.652L151.774 102.611V139.424L162.195 168.669V110.056L175.292 109.097C179.239 109.097 182.438 105.897 182.438 101.951V22.9324C182.438 18.9858 179.239 15.7863 175.292 15.7863Z" fill="#BEBCBD" />
                    <circle cx="66.7218" cy="45.3097" r="5.30973" fill="#2A2F2F" />
                    <circle cx="116.279" cy="45.3097" r="5.30973" fill="#2A2F2F" />
                    <path d="M83.3594 75.6266C87.2532 68.075 98.7222 57.5027 113.448 75.6266" stroke="#2A2F2F" />
                </svg>

            </div>
            <div>
                <p className="font-bold text-black text-[30px] pl-[570px] pt-10">Your cart is empty and sad :( </p>
                <p className="text-[rgba(128,125,126,1)] pl-[650px] font-normal">Add something to make it happy! </p>
            </div>
            <div className="justify-center pl-[640px] pt-12 pb-5">
                <Link to={'/shop'} className=" flex font-bold text-white justify-center items-center w-[246px] h-[46px] rounded-[8px] bg-[rgba(138,51,253,1)]">
                    Continue Shopping
                </Link>
            </div>
        </>
    )
}
export default CardPage