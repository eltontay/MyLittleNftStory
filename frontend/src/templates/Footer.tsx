import React from 'react';
import { Link as FooterLink } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer className="px-6 py-12">
        <div className=" mx-auto grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div>
            <h5 className="text-xl font-semibold ">mylittlenftstory</h5>
            <nav className="mt-4">
              <ul className="space-y-2">
                <li>
                  <div className="font-normal text-base ">
                    A place where Cardano Nft stories are told, heard and
                    discovered.
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h5 className="text-xl font-semibold ">Community</h5>
            <nav className="mt-4">
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://discord.com/channels/832763221144240148/832763221144240151"
                    className="transform motion-safe:hover:scale-110 font-normal text-base "
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/mylittlenftstory/"
                    className="transform motion-safe:hover:scale-110 font-normal text-base "
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/littlenftstory/"
                    className="transform motion-safe:hover:scale-110 font-normal text-base "
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/mylittlenftstory"
                    className="transform motion-safe:hover:scale-110 font-normal text-base "
                  >
                    Telegram
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h5 className="text-xl font-semibold ">Auctions</h5>
            <nav className="mt-4">
              <ul className="space-y-2">
                <li>
                  <FooterLink
                    to="/"
                    className="transform motion-safe:hover:scale-110 font-normal text-base "
                  >
                    Live Auctions
                  </FooterLink>
                </li>
                <li>
                  <FooterLink
                    to="/"
                    className="transform motion-safe:hover:scale-110 font-normal text-base "
                  >
                    Upcoming Auctions
                  </FooterLink>
                </li>
                <li>
                  <FooterLink
                    to="/"
                    className="transform motion-safe:hover:scale-110 font-normal text-base "
                  >
                    Past Auctions
                  </FooterLink>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h5 className="text-xl font-semibold ">Artists</h5>
            <nav className="mt-4">
              <ul className="space-y-2">
                <li>
                  <FooterLink
                    to="/"
                    className="transform motion-safe:hover:scale-110 font-normal text-base "
                  >
                    Email Us
                  </FooterLink>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h5 className="text-xl font-semibold ">Bidder</h5>
            <nav className="mt-4">
              <ul className="space-y-2">
                <li>
                  <FooterLink
                    to="/"
                    className="transform motion-safe:hover:scale-110 font-normal text-base "
                  >
                    Register
                  </FooterLink>
                </li>
                <li>
                  <FooterLink
                    to="/"
                    className="transform motion-safe:hover:scale-110 font-normal text-base "
                  >
                    My Account
                  </FooterLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className=" mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 mt-16 lg:mt-20 border-t-2pt-8 ">
          <div className="text-sm space-y-4 md:space-y-1 text-center md:text-left">
            <p>
              &copy;2021 Company. All rights reserved. | All rights reserved
            </p>
            <nav className="flex items-center space-x-2">
              <a
                href="https://discord.com/channels/832763221144240148/832763221144240151"
                className="transform motion-safe:hover:scale-110 "
              >
                <span className="sr-only">Discord</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  fill="currentColor"
                  className="h-5 w-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.552 6.712c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888.008-.488-.36-.888-.816-.888zm2.92 0c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888s-.36-.888-.816-.888z" />
                  <path d="M13.36 0H2.64C1.736 0 1 .736 1 1.648v10.816c0 .912.736 1.648 1.64 1.648h9.072l-.424-1.48 1.024.952.968.896L15 16V1.648C15 .736 14.264 0 13.36 0zm-3.088 10.448s-.288-.344-.528-.648c1.048-.296 1.448-.952 1.448-.952-.328.216-.64.368-.92.472-.4.168-.784.28-1.16.344a5.604 5.604 0 0 1-2.072-.008 6.716 6.716 0 0 1-1.176-.344 4.688 4.688 0 0 1-.584-.272c-.024-.016-.048-.024-.072-.04-.016-.008-.024-.016-.032-.024-.144-.08-.224-.136-.224-.136s.384.64 1.4.944c-.24.304-.536.664-.536.664-1.768-.056-2.44-1.216-2.44-1.216 0-2.576 1.152-4.664 1.152-4.664 1.152-.864 2.248-.84 2.248-.84l.08.096c-1.44.416-2.104 1.048-2.104 1.048s.176-.096.472-.232c.856-.376 1.536-.48 1.816-.504.048-.008.088-.016.136-.016a6.521 6.521 0 0 1 4.024.752s-.632-.6-1.992-1.016l.112-.128s1.096-.024 2.248.84c0 0 1.152 2.088 1.152 4.664 0 0-.68 1.16-2.448 1.216z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/mylittlenftstory/"
                className="transform motion-safe:hover:scale-110"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://twitter.com/littlenftstory/"
                className="transform motion-safe:hover:scale-110"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://t.me/mylittlenftstory"
                className="transform motion-safe:hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="h-5 w-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
