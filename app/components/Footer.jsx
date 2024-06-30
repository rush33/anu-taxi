import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FOOTER_CONTACT_INFO, SOCIALS } from "../constants";

const Footer = () => {
  return (
    <footer id="footer" className="flexCenter mb-24 mt-14">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row md:items-stretch">
          <div className="md:flex-1 md:max-w-[50%] flex-1 w-full h-full">
            <div className="relative w-full h-[300px] md:h-full md:min-h-[300px] rounded-2xl overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Anu%20Tour%20and%20Taxi%20Guwahati%20Assam%20Tawang%20Shillong%20Kaziranga+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                style={{ border: 0 }}
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="flex flex-col gap-6 md:flex-1 md:max-w-[50%] w-full h-full pt-10 md:pt-0">
            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <div
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap">{link.label}:</p>
                    <p className="medium-14 break-words w-full text-blue-70">
                      {link.label === "Email" ? (
                        <a href={`mailto:${link.value}`}>{link.value}</a>
                      ) : (
                        link.value
                      )}
                    </p>
                  </div>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.sites.map((site) => (
                    <Link href={site.href} key={site.link} target="_blank">
                      <Image
                        src={site.icon}
                        alt="logo"
                        width={30}
                        height={30}
                      />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">
          Made by Rushad & Anuran
        </p>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
