import React from "react"
import { GoMarkGithub } from "react-icons/all"
import { Link } from "react-router-dom"
const Header = () => {
  return (
    <div
      className={
        " flex flex-row filter drop-shadow-lg items-center justify-between px-2 py-3 mb-5 bg-purple-300 w-full "
      }
    >
      <Link to={"/"}>
        <svg
          className={"mx-3 w-28 cursor-pointer"}
          viewBox="0 0 123 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M41 0.878048H79.0488V54.4878C79.0488 55.5924 78.1534 56.4878 77.0488 56.4878H43C41.8954 56.4878 41 55.5924 41 54.4878V0.878048Z"
            fill="white"
          />
          <path
            d="M82 0.878048H120.049V47.1707C120.049 48.2753 119.153 49.1707 118.049 49.1707H84C82.8954 49.1707 82 48.2753 82 47.1707V0.878048Z"
            fill="white"
          />
          <path
            d="M2 1H36V69C36 70.1046 35.1046 71 34 71H4C2.89543 71 2 70.1046 2 69V1Z"
            fill="white"
          />
          <rect y="21" width="120" height="22" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 2.87805H36.0488V21H38.0488V2.87805V0.878048H36.0488H2H0V2.87805V21H2L2 2.87805ZM2 43H0V69.122C0 70.2265 0.895428 71.122 2 71.122H36.0488C37.1534 71.122 38.0488 70.2265 38.0488 69.122V43H36.0488V69.122H2L2 43Z"
            fill="#FEACA5"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M43 2.87805H77.0488V21H79.0488V2.87805V0.878048H77.0488H43H41V2.87805V21H43L43 2.87805ZM43 43H41V54.4878C41 55.5924 41.8954 56.4878 43 56.4878H77.0488C78.1534 56.4878 79.0488 55.5924 79.0488 54.4878V43H77.0488V54.4878H43L43 43Z"
            fill="#FAD5A1"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M84 2.87805H118.049V21H120.049V2.87805V0.878048H118.049H84H82V2.87805V21H84L84 2.87805ZM84 43H82V47.1707C82 48.2753 82.8954 49.1707 84 49.1707H118.049C119.153 49.1707 120.049 48.2753 120.049 47.1707V43H118.049V47.1707L84 47.1707L84 43Z"
            fill="#B5D2AC"
          />
          <path
            d="M18.5273 38.1504C18.5273 38.7168 18.2018 39 17.5508 39C17.2383 39 16.9388 38.9902 16.6523 38.9707C16.3724 38.9512 16.0632 38.9414 15.7246 38.9414L14.8262 38.9707C14.5007 38.9902 14.2012 39 13.9277 39C13.6608 39 13.4427 38.9316 13.2734 38.7949C13.1042 38.6517 13.0195 38.4629 13.0195 38.2285C13.0195 37.9941 13.1172 37.8021 13.3125 37.6523C13.5143 37.5026 13.7812 37.4277 14.1133 37.4277H14.8262C14.1947 35.4421 12.834 33.2611 10.7441 30.8848C9.93685 31.4316 9.08073 31.9427 8.17578 32.418V37.4277H8.85938C9.3151 37.4277 9.63411 37.5091 9.81641 37.6719C9.9987 37.8281 10.0898 37.9876 10.0898 38.1504C10.0898 38.7168 9.74154 39 9.04492 39L7.23828 38.9414L5.28516 39C4.99219 39 4.76107 38.9316 4.5918 38.7949C4.42253 38.6517 4.33789 38.4629 4.33789 38.2285C4.33789 37.9941 4.43555 37.8021 4.63086 37.6523C4.83268 37.5026 5.09961 37.4277 5.43164 37.4277H6.35938V25.3867H5.43164C5.09961 25.3867 4.83268 25.3151 4.63086 25.1719C4.43555 25.0286 4.33789 24.8398 4.33789 24.6055C4.33789 24.3711 4.42253 24.1823 4.5918 24.0391C4.76107 23.8893 4.99219 23.8145 5.28516 23.8145L7.23828 23.8828L9.04492 23.8145C9.57878 23.8145 9.90755 23.974 10.0312 24.293C10.0703 24.3841 10.0898 24.4785 10.0898 24.5762C10.0898 25.1165 9.67969 25.3867 8.85938 25.3867H8.17578V30.8262C9.59505 30.0319 11.2096 28.8047 13.0195 27.1445C13.8724 26.3633 14.5267 25.6927 14.9824 25.1328C15.4382 24.5729 15.7702 24.2148 15.9785 24.0586C16.1934 23.8958 16.4115 23.8145 16.6328 23.8145C16.8607 23.8145 17.056 23.8763 17.2188 24C17.388 24.1237 17.4727 24.2995 17.4727 24.5273C17.4727 24.7552 17.4206 24.9635 17.3164 25.1523C17.2188 25.3411 17.0332 25.5755 16.7598 25.8555C15.972 26.6367 15.347 27.2357 14.8848 27.6523L13.5371 28.8145C13.0944 29.179 12.6289 29.5436 12.1406 29.9082C14.3542 32.2324 15.8906 34.7389 16.75 37.4277H17.2969C17.7526 37.4277 18.0716 37.5091 18.2539 37.6719C18.4362 37.8281 18.5273 37.9876 18.5273 38.1504ZM26.1445 34.9375C25.0898 34.7357 24.1523 34.6348 23.332 34.6348C22.5182 34.6348 21.916 34.7975 21.5254 35.123C21.1413 35.4421 20.9492 35.8066 20.9492 36.2168C20.9492 36.627 21.1283 36.9655 21.4863 37.2324C21.8444 37.4928 22.3457 37.623 22.9902 37.623C24.3118 37.623 25.3633 37.1966 26.1445 36.3438V34.9375ZM26.3691 37.8574C25.653 38.7168 24.4648 39.1465 22.8047 39.1465C21.6979 39.1465 20.8158 38.8926 20.1582 38.3848C19.5072 37.877 19.1816 37.1901 19.1816 36.3242C19.1816 34.8854 19.9792 33.9479 21.5742 33.5117C22.1146 33.3685 22.8112 33.2969 23.6641 33.2969C24.5234 33.2969 25.3503 33.3945 26.1445 33.5898V32.5156C26.1445 31.4414 25.7148 30.7839 24.8555 30.543C24.5495 30.4518 24.1393 30.4062 23.625 30.4062C22.5247 30.4062 21.89 30.6992 21.7207 31.2852C21.6165 31.5977 21.431 31.8223 21.1641 31.959C21.0469 32.0176 20.9134 32.0469 20.7637 32.0469C20.1452 32.0469 19.8359 31.7148 19.8359 31.0508C19.8359 30.4844 20.207 29.9831 20.9492 29.5469C21.6979 29.1107 22.6452 28.8926 23.791 28.8926C25.7311 28.8926 26.9844 29.5794 27.5508 30.9531C27.7396 31.4219 27.834 31.9753 27.834 32.6133V35.1426C27.834 36.028 27.8698 36.6237 27.9414 36.9297C28.013 37.2292 28.1465 37.4408 28.3418 37.5645C28.6868 37.7858 28.8594 38.043 28.8594 38.3359C28.8594 38.8763 28.5176 39.1465 27.834 39.1465C27.1569 39.1465 26.6686 38.7168 26.3691 37.8574ZM34.7285 39.5176C34.7285 42.4668 33.7096 43.9414 31.6719 43.9414C30.8255 43.9414 30.1582 43.7168 29.6699 43.2676C29.1816 42.8184 28.9375 42.2259 28.9375 41.4902C28.9375 41.015 29.0449 40.6374 29.2598 40.3574C29.4746 40.0775 29.7318 39.9375 30.0312 39.9375C30.6302 39.9375 30.9297 40.1784 30.9297 40.6602C30.9297 40.8424 30.8809 41.0117 30.7832 41.168C30.6921 41.3307 30.6465 41.5098 30.6465 41.7051C30.6465 41.9069 30.7311 42.0827 30.9004 42.2324C31.0762 42.3822 31.2747 42.457 31.4961 42.457C31.9779 42.457 32.3359 42.2617 32.5703 41.8711C32.8112 41.487 32.9316 40.7871 32.9316 39.7715V31.168C32.9316 30.7773 32.8275 30.582 32.6191 30.582L31.4961 30.7188C31.2357 30.7188 31.0241 30.6504 30.8613 30.5137C30.6986 30.377 30.6172 30.1914 30.6172 29.957C30.6172 29.7161 30.7083 29.5176 30.8906 29.3613C31.0794 29.2051 31.4212 29.1172 31.916 29.0977C32.4108 29.0716 32.7689 29.0358 32.9902 28.9902C33.2116 28.9382 33.3809 28.8958 33.498 28.8633C33.6152 28.8307 33.7454 28.8145 33.8887 28.8145C34.4486 28.8145 34.7285 29.127 34.7285 29.752V39.5176ZM34.7676 25.5625C34.7676 26.181 34.5039 26.5846 33.9766 26.7734C33.8268 26.8255 33.6152 26.8516 33.3418 26.8516C33.0684 26.8516 32.8145 26.7441 32.5801 26.5293C32.3457 26.3145 32.2285 26.0345 32.2285 25.6895C32.2285 25.3444 32.349 25.0579 32.5898 24.8301C32.8307 24.6022 33.153 24.4883 33.5566 24.4883C33.9603 24.4883 34.263 24.599 34.4648 24.8203C34.6667 25.0352 34.7676 25.2826 34.7676 25.5625ZM56.125 25.5332L55.3828 25.5039C55.2852 25.5039 55.1973 25.5104 55.1191 25.5234V37.4277H55.9883C56.3268 37.4277 56.5938 37.5026 56.7891 37.6523C56.9909 37.8021 57.0918 37.9941 57.0918 38.2285C57.0918 38.4629 57.0072 38.6517 56.8379 38.7949C56.6686 38.9316 56.4375 39 56.1445 39L54.2012 38.9414L52.375 39C51.8477 39 51.5221 38.8438 51.3984 38.5312C51.3594 38.4401 51.3398 38.3132 51.3398 38.1504C51.3398 37.9876 51.4277 37.8281 51.6035 37.6719C51.7858 37.5091 52.1048 37.4277 52.5605 37.4277H53.3711V28.3848C53.3711 27.623 53.3971 26.9427 53.4492 26.3438L48.1172 36.7441C47.8633 37.3431 47.5475 37.6426 47.1699 37.6426C46.903 37.6426 46.7012 37.5807 46.5645 37.457C46.4342 37.3333 46.2812 37.099 46.1055 36.7539L40.7148 26.4805C40.7734 27.1706 40.8027 28.0299 40.8027 29.0586V37.4277H41.5938C42.043 37.4277 42.3587 37.5091 42.541 37.6719C42.7298 37.8281 42.8242 37.9876 42.8242 38.1504C42.8242 38.7168 42.4759 39 41.7793 39L39.9531 38.9414L38 39C37.7135 39 37.4857 38.9316 37.3164 38.7949C37.1536 38.6517 37.0723 38.4629 37.0723 38.2285C37.0723 37.9941 37.1699 37.8021 37.3652 37.6523C37.5605 37.5026 37.8275 37.4277 38.166 37.4277H39.0352V25.543L38.8008 25.5332L38.0195 25.5625C37.8633 25.5625 37.7038 25.5495 37.541 25.5234C37.1113 25.4583 36.8965 25.2044 36.8965 24.7617C36.8965 24.1432 37.2969 23.834 38.0977 23.834H38.3906C39.7773 23.834 40.7279 24.0521 41.2422 24.4883C41.5026 24.7031 41.7891 25.1133 42.1016 25.7188L47.1016 35.1133L51.7402 26.0703C52.2285 25.0938 52.8568 24.4622 53.625 24.1758C54.1458 23.9805 54.6406 23.8763 55.1094 23.8633C55.5846 23.8438 55.9688 23.834 56.2617 23.834C56.9258 23.834 57.2578 24.1302 57.2578 24.7227C57.2578 25.1719 57.069 25.4258 56.6914 25.4844C56.4961 25.5169 56.3073 25.5332 56.125 25.5332ZM66.0664 34.9375C65.0117 34.7357 64.0742 34.6348 63.2539 34.6348C62.4401 34.6348 61.8379 34.7975 61.4473 35.123C61.0632 35.4421 60.8711 35.8066 60.8711 36.2168C60.8711 36.627 61.0501 36.9655 61.4082 37.2324C61.7663 37.4928 62.2676 37.623 62.9121 37.623C64.2337 37.623 65.2852 37.1966 66.0664 36.3438V34.9375ZM66.291 37.8574C65.5749 38.7168 64.3867 39.1465 62.7266 39.1465C61.6198 39.1465 60.7376 38.8926 60.0801 38.3848C59.429 37.877 59.1035 37.1901 59.1035 36.3242C59.1035 34.8854 59.901 33.9479 61.4961 33.5117C62.0365 33.3685 62.7331 33.2969 63.5859 33.2969C64.4453 33.2969 65.2721 33.3945 66.0664 33.5898V32.5156C66.0664 31.4414 65.6367 30.7839 64.7773 30.543C64.4714 30.4518 64.0612 30.4062 63.5469 30.4062C62.4466 30.4062 61.8118 30.6992 61.6426 31.2852C61.5384 31.5977 61.3529 31.8223 61.0859 31.959C60.9688 32.0176 60.8353 32.0469 60.6855 32.0469C60.0671 32.0469 59.7578 31.7148 59.7578 31.0508C59.7578 30.4844 60.1289 29.9831 60.8711 29.5469C61.6198 29.1107 62.5671 28.8926 63.7129 28.8926C65.653 28.8926 66.9062 29.5794 67.4727 30.9531C67.6615 31.4219 67.7559 31.9753 67.7559 32.6133V35.1426C67.7559 36.028 67.7917 36.6237 67.8633 36.9297C67.9349 37.2292 68.0684 37.4408 68.2637 37.5645C68.6087 37.7858 68.7812 38.043 68.7812 38.3359C68.7812 38.8763 68.4395 39.1465 67.7559 39.1465C67.0788 39.1465 66.5905 38.7168 66.291 37.8574ZM71.2422 39C70.6172 39 70.3047 38.7591 70.3047 38.2773C70.3047 38.043 70.4023 37.8607 70.5977 37.7305C70.793 37.6003 71.0632 37.5352 71.4082 37.5352H72.2773V31.168C72.2773 30.7773 72.1927 30.582 72.0234 30.582C71.9323 30.582 71.8118 30.6048 71.6621 30.6504C71.5124 30.696 71.3301 30.7188 71.1152 30.7188C70.9004 30.7188 70.7116 30.6504 70.5488 30.5137C70.3861 30.377 70.3047 30.1914 70.3047 29.957C70.3047 29.4622 70.6562 29.179 71.3594 29.1074C71.7305 29.0749 72.0755 29.0195 72.3945 28.9414C72.7201 28.8568 73.0065 28.8145 73.2539 28.8145C73.7292 28.8145 73.9668 29.127 73.9668 29.752V31.0312C74.2467 30.4062 74.7057 29.8952 75.3438 29.498C75.9818 29.0944 76.6556 28.8926 77.3652 28.8926C78.6283 28.8926 79.5234 29.2116 80.0508 29.8496C80.5781 30.4876 80.8418 31.347 80.8418 32.4277V37.5352H81.4961C82.3164 37.5352 82.7266 37.7923 82.7266 38.3066C82.7266 38.4889 82.6484 38.6517 82.4922 38.7949C82.3359 38.9316 82.069 39 81.6914 39L79.9727 38.9414L78.1172 39C77.4922 39 77.1797 38.7591 77.1797 38.2773C77.1797 38.043 77.2773 37.8607 77.4727 37.7305C77.668 37.6003 77.9382 37.5352 78.2832 37.5352H79.1328V33.0625C79.1328 31.6953 78.7878 30.875 78.0977 30.6016C77.8568 30.5039 77.5671 30.4551 77.2285 30.4551C76.5319 30.4551 75.8646 30.722 75.2266 31.2559C74.5951 31.7897 74.1751 32.4668 73.9668 33.2871V37.5352H74.6211C75.4414 37.5352 75.8516 37.7923 75.8516 38.3066C75.8516 38.4889 75.7734 38.6517 75.6172 38.7949C75.4609 38.9316 75.194 39 74.8164 39L73.0977 38.9414L71.2422 39ZM91.0469 34.9375C89.9922 34.7357 89.0547 34.6348 88.2344 34.6348C87.4206 34.6348 86.8184 34.7975 86.4277 35.123C86.0436 35.4421 85.8516 35.8066 85.8516 36.2168C85.8516 36.627 86.0306 36.9655 86.3887 37.2324C86.7467 37.4928 87.248 37.623 87.8926 37.623C89.2142 37.623 90.2656 37.1966 91.0469 36.3438V34.9375ZM91.2715 37.8574C90.5553 38.7168 89.3672 39.1465 87.707 39.1465C86.6003 39.1465 85.7181 38.8926 85.0605 38.3848C84.4095 37.877 84.084 37.1901 84.084 36.3242C84.084 34.8854 84.8815 33.9479 86.4766 33.5117C87.0169 33.3685 87.7135 33.2969 88.5664 33.2969C89.4258 33.2969 90.2526 33.3945 91.0469 33.5898V32.5156C91.0469 31.4414 90.6172 30.7839 89.7578 30.543C89.4518 30.4518 89.0417 30.4062 88.5273 30.4062C87.4271 30.4062 86.7923 30.6992 86.623 31.2852C86.5189 31.5977 86.3333 31.8223 86.0664 31.959C85.9492 32.0176 85.8158 32.0469 85.666 32.0469C85.0475 32.0469 84.7383 31.7148 84.7383 31.0508C84.7383 30.4844 85.1094 29.9831 85.8516 29.5469C86.6003 29.1107 87.5475 28.8926 88.6934 28.8926C90.6335 28.8926 91.8867 29.5794 92.4531 30.9531C92.6419 31.4219 92.7363 31.9753 92.7363 32.6133V35.1426C92.7363 36.028 92.7721 36.6237 92.8438 36.9297C92.9154 37.2292 93.0488 37.4408 93.2441 37.5645C93.5892 37.7858 93.7617 38.043 93.7617 38.3359C93.7617 38.8763 93.4199 39.1465 92.7363 39.1465C92.0592 39.1465 91.571 38.7168 91.2715 37.8574ZM102.922 36.4707V31.4805C102.922 31.3828 102.928 31.2884 102.941 31.1973C102.271 30.6634 101.483 30.3965 100.578 30.3965C99.6732 30.3965 98.8952 30.7513 98.2441 31.4609C97.5931 32.1706 97.2676 32.9876 97.2676 33.9121C97.2676 35.11 97.5638 36.0247 98.1562 36.6562C98.7487 37.2878 99.5267 37.6035 100.49 37.6035C101.454 37.6035 102.264 37.2259 102.922 36.4707ZM103.361 29.7031C103.667 29.1628 104.12 28.8926 104.719 28.8926C105.318 28.8926 105.617 29.1758 105.617 29.7422C105.617 30.0156 105.484 30.2402 105.217 30.416C104.956 30.5853 104.79 30.8262 104.719 31.1387C104.654 31.4447 104.621 32.0339 104.621 32.9062V38.9121C104.621 40.5202 104.221 41.793 103.42 42.7305C102.619 43.6745 101.551 44.1465 100.217 44.1465C99.123 44.1465 98.2572 43.9056 97.6191 43.4238C96.9811 42.9421 96.6621 42.3464 96.6621 41.6367C96.6621 41.1289 96.7988 40.6992 97.0723 40.3477C97.3457 40.0026 97.6973 39.8301 98.127 39.8301C98.3809 39.8301 98.612 39.9147 98.8203 40.084C99.0352 40.2533 99.1426 40.4355 99.1426 40.6309C99.1426 40.8262 99.11 40.9661 99.0449 41.0508C98.9798 41.1354 98.9082 41.2135 98.8301 41.2852C98.7585 41.3568 98.6771 41.4219 98.5859 41.4805C98.4948 41.5456 98.4492 41.6302 98.4492 41.7344C98.4492 41.9753 98.5892 42.1738 98.8691 42.3301C99.1556 42.4863 99.556 42.5645 100.07 42.5645C101.001 42.5645 101.708 42.2552 102.189 41.6367C102.678 41.0247 102.922 40.1589 102.922 39.0391V38.1699C102.199 38.821 101.333 39.1465 100.324 39.1465C98.9831 39.1465 97.8535 38.694 96.9355 37.7891C96.0176 36.8841 95.5586 35.6602 95.5586 34.1172C95.5586 32.5677 96.0469 31.3112 97.0234 30.3477C98 29.3776 99.2402 28.8926 100.744 28.8926C101.512 28.8926 102.206 29.0456 102.824 29.3516C103.026 29.4492 103.205 29.5664 103.361 29.7031ZM109.123 33.1016L109.797 33.1211C110.018 33.1276 110.728 33.1309 111.926 33.1309C113.124 33.1309 113.908 33.0332 114.279 32.8379C114.65 32.6426 114.836 32.3464 114.836 31.9492C114.836 31.5521 114.611 31.2005 114.162 30.8945C113.713 30.5885 113.215 30.4355 112.668 30.4355C111.711 30.4355 110.923 30.6797 110.305 31.168C109.686 31.6562 109.292 32.3008 109.123 33.1016ZM115.676 35.9238C116.249 35.9238 116.535 36.181 116.535 36.6953C116.535 36.9297 116.444 37.1934 116.262 37.4863C116.086 37.7728 115.826 38.0397 115.48 38.2871C114.673 38.86 113.615 39.1465 112.307 39.1465C111.005 39.1465 109.875 38.707 108.918 37.8281C108.443 37.3919 108.062 36.8548 107.775 36.2168C107.489 35.5788 107.346 34.8789 107.346 34.1172C107.346 32.6328 107.834 31.3926 108.811 30.3965C109.787 29.3939 111.018 28.8926 112.502 28.8926C113.739 28.8926 114.719 29.1953 115.441 29.8008C116.171 30.3997 116.535 31.1387 116.535 32.0176C116.535 32.8965 116.18 33.554 115.471 33.9902C114.761 34.4199 113.413 34.6348 111.428 34.6348C110.9 34.6348 110.119 34.6152 109.084 34.5762C109.201 35.5853 109.592 36.3438 110.256 36.8516C110.92 37.3529 111.613 37.6035 112.336 37.6035C113.059 37.6035 113.628 37.5254 114.045 37.3691C114.468 37.2064 114.771 36.9264 114.953 36.5293C115.142 36.1257 115.383 35.9238 115.676 35.9238Z"
            fill="#18181B"
          />
          <path
            d="M14.1182 7.21387H11.9844V13H10.2705V7.21387H8.17578V5.89062H14.1182V7.21387ZM13.5469 10.3096C13.5469 9.78223 13.6494 9.31348 13.8545 8.90332C14.0596 8.48991 14.3542 8.17253 14.7383 7.95117C15.1224 7.72982 15.5732 7.61914 16.0908 7.61914C16.8818 7.61914 17.5052 7.86491 17.9609 8.35645C18.4167 8.84473 18.6445 9.51042 18.6445 10.3535V10.4121C18.6445 11.2357 18.415 11.89 17.9561 12.375C17.5003 12.8568 16.8818 13.0977 16.1006 13.0977C15.3486 13.0977 14.7448 12.873 14.2891 12.4238C13.8333 11.9714 13.5876 11.3594 13.5518 10.5879L13.5469 10.3096ZM15.1924 10.4121C15.1924 10.9004 15.2689 11.2585 15.4219 11.4863C15.5749 11.7142 15.8011 11.8281 16.1006 11.8281C16.6865 11.8281 16.986 11.3773 16.999 10.4756V10.3096C16.999 9.3623 16.6963 8.88867 16.0908 8.88867C15.5407 8.88867 15.2428 9.2972 15.1973 10.1143L15.1924 10.4121ZM19.1621 10.3193C19.1621 9.48275 19.3428 8.82357 19.7041 8.3418C20.0654 7.86003 20.57 7.61914 21.2178 7.61914C21.6898 7.61914 22.0869 7.80469 22.4092 8.17578V5.5H24.0596V13H22.5801L22.4971 12.4336C22.1585 12.8763 21.7288 13.0977 21.208 13.0977C20.5798 13.0977 20.0817 12.8568 19.7139 12.375C19.346 11.8932 19.1621 11.208 19.1621 10.3193ZM20.8076 10.4219C20.8076 11.3594 21.0811 11.8281 21.6279 11.8281C21.9925 11.8281 22.2529 11.6751 22.4092 11.3691V9.35742C22.2594 9.04492 22.0023 8.88867 21.6377 8.88867C21.1299 8.88867 20.8548 9.29883 20.8125 10.1191L20.8076 10.4219ZM24.7871 10.3096C24.7871 9.78223 24.8896 9.31348 25.0947 8.90332C25.2998 8.48991 25.5944 8.17253 25.9785 7.95117C26.3626 7.72982 26.8135 7.61914 27.3311 7.61914C28.1221 7.61914 28.7454 7.86491 29.2012 8.35645C29.6569 8.84473 29.8848 9.51042 29.8848 10.3535V10.4121C29.8848 11.2357 29.6553 11.89 29.1963 12.375C28.7406 12.8568 28.1221 13.0977 27.3408 13.0977C26.5889 13.0977 25.985 12.873 25.5293 12.4238C25.0736 11.9714 24.8278 11.3594 24.792 10.5879L24.7871 10.3096ZM26.4326 10.4121C26.4326 10.9004 26.5091 11.2585 26.6621 11.4863C26.8151 11.7142 27.0413 11.8281 27.3408 11.8281C27.9268 11.8281 28.2262 11.3773 28.2393 10.4756V10.3096C28.2393 9.3623 27.9365 8.88867 27.3311 8.88867C26.7809 8.88867 26.4831 9.2972 26.4375 10.1143L26.4326 10.4121Z"
            fill="#FEACA5"
          />
          <path
            d="M47.6348 14V6.89062H49.8223C50.4473 6.89062 51.0055 7.03223 51.4971 7.31543C51.9919 7.59538 52.3776 7.99577 52.6543 8.5166C52.931 9.03418 53.0693 9.62337 53.0693 10.2842V10.6113C53.0693 11.2721 52.9326 11.8597 52.6592 12.374C52.389 12.8883 52.0065 13.2871 51.5117 13.5703C51.0169 13.8535 50.4587 13.9967 49.8369 14H47.6348ZM49.0996 8.07715V12.8232H49.8076C50.3805 12.8232 50.8184 12.6361 51.1211 12.2617C51.4238 11.8874 51.5785 11.3519 51.585 10.6553V10.2793C51.585 9.55664 51.4352 9.00977 51.1357 8.63867C50.8363 8.26432 50.3984 8.07715 49.8223 8.07715H49.0996ZM53.8262 11.3096C53.8262 10.7855 53.9271 10.3184 54.1289 9.9082C54.3307 9.49805 54.6204 9.18066 54.998 8.95605C55.3789 8.73145 55.82 8.61914 56.3213 8.61914C57.0342 8.61914 57.6152 8.83724 58.0645 9.27344C58.5169 9.70964 58.7692 10.3021 58.8213 11.0508L58.8311 11.4121C58.8311 12.2227 58.6048 12.8737 58.1523 13.3652C57.6999 13.8535 57.0928 14.0977 56.3311 14.0977C55.5693 14.0977 54.9606 13.8535 54.5049 13.3652C54.0524 12.877 53.8262 12.2129 53.8262 11.373V11.3096ZM55.2373 11.4121C55.2373 11.9134 55.3317 12.2975 55.5205 12.5645C55.7093 12.8281 55.9795 12.96 56.3311 12.96C56.6729 12.96 56.9398 12.8298 57.1318 12.5693C57.3239 12.3057 57.4199 11.8857 57.4199 11.3096C57.4199 10.818 57.3239 10.4372 57.1318 10.167C56.9398 9.89681 56.6696 9.76172 56.3213 9.76172C55.9762 9.76172 55.7093 9.89681 55.5205 10.167C55.3317 10.4339 55.2373 10.849 55.2373 11.4121ZM61.1895 14H59.7734V8.7168H61.1895V14ZM59.6904 7.34961C59.6904 7.13802 59.7604 6.96387 59.9004 6.82715C60.0436 6.69043 60.2373 6.62207 60.4814 6.62207C60.7223 6.62207 60.9144 6.69043 61.0576 6.82715C61.2008 6.96387 61.2725 7.13802 61.2725 7.34961C61.2725 7.56445 61.1992 7.74023 61.0527 7.87695C60.9095 8.01367 60.7191 8.08203 60.4814 8.08203C60.2438 8.08203 60.0518 8.01367 59.9053 7.87695C59.762 7.74023 59.6904 7.56445 59.6904 7.34961ZM63.6553 8.7168L63.6992 9.32715C64.0768 8.85514 64.583 8.61914 65.2178 8.61914C65.7777 8.61914 66.1943 8.78353 66.4678 9.1123C66.7412 9.44108 66.8812 9.93262 66.8877 10.5869V14H65.4766V10.6211C65.4766 10.3216 65.4115 10.1051 65.2812 9.97168C65.151 9.83496 64.9346 9.7666 64.6318 9.7666C64.2347 9.7666 63.9368 9.93587 63.7383 10.2744V14H62.3271V8.7168H63.6553ZM67.7568 11.3193C67.7568 10.5088 67.9489 9.85612 68.333 9.36133C68.7204 8.86654 69.2412 8.61914 69.8955 8.61914C70.4749 8.61914 70.9258 8.81771 71.248 9.21484L71.3066 8.7168H72.5859V13.8242C72.5859 14.2865 72.4801 14.6885 72.2686 15.0303C72.0602 15.3721 71.7656 15.6325 71.3848 15.8115C71.0039 15.9906 70.5579 16.0801 70.0469 16.0801C69.6595 16.0801 69.2819 16.002 68.9141 15.8457C68.5462 15.6927 68.2679 15.4941 68.0791 15.25L68.7041 14.3906C69.0557 14.7845 69.4821 14.9814 69.9834 14.9814C70.3577 14.9814 70.6491 14.8805 70.8574 14.6787C71.0658 14.4801 71.1699 14.1969 71.1699 13.8291V13.5459C70.8444 13.9137 70.4163 14.0977 69.8857 14.0977C69.251 14.0977 68.7367 13.8503 68.3428 13.3555C67.9521 12.8574 67.7568 12.1982 67.7568 11.3779V11.3193ZM69.168 11.4219C69.168 11.9004 69.264 12.2764 69.4561 12.5498C69.6481 12.82 69.9118 12.9551 70.2471 12.9551C70.6768 12.9551 70.9844 12.7939 71.1699 12.4717V10.25C70.9811 9.92773 70.6768 9.7666 70.2568 9.7666C69.9183 9.7666 69.6514 9.90495 69.4561 10.1816C69.264 10.4583 69.168 10.8717 69.168 11.4219Z"
            fill="#FAD5A1"
          />
          <path
            d="M89.5371 14V6.89062H91.8271C92.4554 6.89062 93.0202 7.03385 93.5215 7.32031C94.0228 7.60352 94.4134 8.00553 94.6934 8.52637C94.9766 9.04395 95.1198 9.625 95.123 10.2695V10.5967C95.123 11.2477 94.9847 11.832 94.708 12.3496C94.4346 12.8639 94.0472 13.2676 93.5459 13.5605C93.0479 13.8503 92.4912 13.9967 91.876 14H89.5371ZM91.251 8.21387V12.6816H91.8467C92.3382 12.6816 92.7158 12.5075 92.9795 12.1592C93.2432 11.8076 93.375 11.2868 93.375 10.5967V10.2891C93.375 9.60221 93.2432 9.08464 92.9795 8.73633C92.7158 8.38802 92.3317 8.21387 91.8271 8.21387H91.251ZM95.7188 11.3096C95.7188 10.7822 95.8213 10.3135 96.0264 9.90332C96.2314 9.48991 96.526 9.17253 96.9102 8.95117C97.2943 8.72982 97.7451 8.61914 98.2627 8.61914C99.0537 8.61914 99.6771 8.86491 100.133 9.35645C100.589 9.84473 100.816 10.5104 100.816 11.3535V11.4121C100.816 12.2357 100.587 12.89 100.128 13.375C99.6722 13.8568 99.0537 14.0977 98.2725 14.0977C97.5205 14.0977 96.9167 13.873 96.4609 13.4238C96.0052 12.9714 95.7594 12.3594 95.7236 11.5879L95.7188 11.3096ZM97.3643 11.4121C97.3643 11.9004 97.4408 12.2585 97.5938 12.4863C97.7467 12.7142 97.973 12.8281 98.2725 12.8281C98.8584 12.8281 99.1579 12.3773 99.1709 11.4756V11.3096C99.1709 10.3623 98.8682 9.88867 98.2627 9.88867C97.7126 9.88867 97.4147 10.2972 97.3691 11.1143L97.3643 11.4121ZM103.053 8.7168L103.106 9.33691C103.471 8.8584 103.974 8.61914 104.615 8.61914C105.165 8.61914 105.576 8.78353 105.846 9.1123C106.119 9.44108 106.261 9.93587 106.271 10.5967V14H104.62V10.665C104.62 10.3981 104.566 10.2028 104.459 10.0791C104.352 9.95215 104.156 9.88867 103.873 9.88867C103.551 9.88867 103.312 10.0156 103.155 10.2695V14H101.51V8.7168H103.053ZM109.742 14.0977C108.932 14.0977 108.276 13.8568 107.774 13.375C107.273 12.89 107.022 12.2601 107.022 11.4854V11.3486C107.022 10.8083 107.122 10.3314 107.32 9.91797C107.522 9.50456 107.815 9.18555 108.199 8.96094C108.583 8.73307 109.039 8.61914 109.566 8.61914C110.309 8.61914 110.895 8.85026 111.324 9.3125C111.754 9.77148 111.969 10.4128 111.969 11.2363V11.876H108.697C108.756 12.1722 108.884 12.4049 109.083 12.5742C109.282 12.7435 109.539 12.8281 109.854 12.8281C110.375 12.8281 110.782 12.6458 111.075 12.2812L111.827 13.1699C111.622 13.4531 111.331 13.6794 110.953 13.8486C110.579 14.0146 110.175 14.0977 109.742 14.0977ZM109.557 9.88867C109.075 9.88867 108.788 10.2077 108.697 10.8457H110.357V10.7188C110.364 10.4551 110.297 10.2516 110.157 10.1084C110.017 9.96191 109.817 9.88867 109.557 9.88867Z"
            fill="#B5D2AC"
          />
        </svg>
      </Link>
      <a href="/" target={"_blank"} rel="noreferrer">
        <GoMarkGithub className={"text-5xl hover:text-white text-black mr-4"} />
      </a>
    </div>
  )
}

export default Header
