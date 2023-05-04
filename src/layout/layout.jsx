import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Cookie from "js-cookie";
import adminIcon from "../img/icons/admin.png";

export default function LayoutHome() {
  

  return (
    <>
      {/* <div
        class="p-4 text-sm text-red-800  bg-[#CAD5E2] dark:bg-gray-800 dark:text-red-400"
        role="alert"
      >
        <span class="font-medium">
          To start using the app, please update your profile.
        </span>
      </div> */}
      <Outlet />
      <div className="w-full">
        {/* <section id="bottom-navigation" class="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow"> // if shown only tablet/mobile*/}
        <section
          id="bottom-navigation"
          className="block fixed inset-x-0 bottom-0 z-10 bg-[#dde3e9] shadow"
        >
          <div id="tabs" className="flex justify-between">
            <Link style={{
              display: "flex"
            }}
              to={"home/user"}
              className="w-full flex-col justify-center items-center focus:text-teal-500 hover:text-teal-500  inline-block text-center pt-2 pb-1"
            >
              
<svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 96 960 960" width="40"><path d="M234 862h165V624.5h162V862h165V493L480 306 234 492.333V862Zm-22 22V481.5L480 279l268 203v402H539V646.5H421V884H212Zm268-300Z"/></svg>
              <span className="tab tab-home block text-xs">Home</span>
            </Link>

            <Link style={{
              display: "flex"
            }}
              to={"home/profile"}
              className="w-full focus:text-teal-500 flex-col items-center hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
            >
            
<svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 96 960 960" width="40"><path d="M248.483 805.5Q303 769 358 747.5 413 726 480 726t121.75 21.5q54.75 21.5 110.75 58 42.5-44.5 68-102.498Q806 645.004 806 576.275q0-135.775-95.25-231.025T480 250q-135.5 0-230.75 95.25T154 576.275q0 68.729 25.5 126.727Q205 761 248.483 805.5ZM479.789 587q-48.289 0-80.539-32.461T367 473.789q0-48.289 32.461-80.539t80.75-32.25q48.289 0 80.539 32.461t32.25 80.75q0 48.289-32.461 80.539T479.789 587Zm.429 337q-72.625 0-136.246-27.263-63.621-27.263-110.547-74.5Q186.5 775 159.25 711.94 132 648.881 132 575.984q0-72.391 27.263-135.799 27.263-63.409 74.5-110.547Q281 282.5 344.06 255.25 407.119 228 480.016 228q72.391 0 135.799 27.263 63.409 27.263 110.547 74.5Q773.5 377 800.75 440.326 828 503.651 828 575.782q0 72.624-27.263 136.246-27.263 63.621-74.5 110.547Q679 869.5 615.674 896.75 552.349 924 480.218 924Zm-.278-22q57.06 0 113.81-20.5T694 822q-43.5-34-97.7-54-54.199-20-116.21-20-62.011 0-117.3 19-55.29 19-95.79 55 42.5 39 99.19 59.5T479.94 902Zm.2-337q39.36 0 65.11-25.89Q571 513.221 571 473.86q0-39.36-25.89-65.11Q519.221 383 479.86 383q-39.36 0-65.11 25.89Q389 434.779 389 474.14q0 39.36 25.89 65.11Q440.779 565 480.14 565Zm-.14-91Zm0 351Z"/></svg>

              <span className="tab tab-account block text-xs">Profile</span>
            </Link>
        {Cookie.get("role") === "admin" ? (
                <Link style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent:"center",
                  alignItems:"center"
                }}
                to={"home/admin"}
                href="#"
                className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
              >
           
<svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 96 960 960" width="40"><path d="M480.055 587q-48.555 0-80.805-32.195Q367 522.611 367 474.055q0-48.555 32.195-80.805Q431.389 361 479.945 361q48.555 0 80.805 32.195Q593 425.389 593 473.945q0 48.555-32.195 80.805Q528.611 587 480.055 587ZM480 565q39.5 0 65.25-25.75T571 474q0-39.5-25.75-65.25T480 383q-39.5 0-65.25 25.75T389 474q0 39.5 25.75 65.25T480 565Zm0 357q-115.045-37.567-191.523-143.527Q212 672.514 212 537.876v-205.62L480 232l268 100.256v205.62q0 134.638-76.477 240.597Q595.045 884.433 480 922Zm0-345.5Zm0-321.5-246 91.387V538q0 63.5 19.5 123.25T308 769.5q40.571-20.733 82.175-32.117Q431.779 726 479.979 726t89.825 11.383Q611.429 748.767 652 769.5q35-48.5 54.5-108.25T726 538V346.387L480 255Zm-.114 493q-44.367 0-83.876 10-39.51 10-75.01 28.159Q352.948 826 393.224 854.25 433.5 882.5 480.25 897.5q46.75-15 86.25-43t72-69q-35.926-16.767-75.161-27.133Q524.105 748 479.886 748Z"/></svg>
  
                <span className="tab tab-kategori block text-xs">
                  Admin Panel
                </span>
              </Link>
              ) : (
                <></>
              )}
          </div>
        </section>
      </div>
    </>
  );
}
