import React, { useEffect, useState } from "react";
import { client } from "../sanity";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";

// ✅ Use icon components instead of JSX elements
const iconMap = {
  facebook: TiSocialFacebook,
  instagram: SlSocialInstagram,
  twitter: TiSocialTwitter,
  linkedin: SlSocialLinkedin,
};

export function Footer() {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "footer"][0]{
          socialLinks[] { platform, url },
          footerLinks[] { label, url },
          copyrightText,
          builtWithText
        }`
      )
      .then(setFooterData)
      .catch(console.error);
  }, []);

  if (!footerData) return null;

  const { socialLinks, footerLinks, copyrightText, builtWithText } = footerData;

  return (
    <footer className="bg-white px-6 py-10 text-center md:text-left">
      {/* Social Icons */}
      <div className="flex justify-center md:justify-end gap-6 mb-8 border-b pb-6">
        {socialLinks.map((link, i) => {
          const Icon = iconMap[link.platform?.toLowerCase()];
          return (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit our ${link.platform} page`}
              className="text-xl text-gray-600 hover:text-blue-600 transition"
            >
              {Icon && <Icon aria-hidden="true" />}
            </a>
          );
        })}
      </div>

      {/* Bottom Info */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        <div>
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} {copyrightText}
          </p>
          <p className="text-gray-500 text-xs mt-1">{builtWithText}</p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-gray-600">
          {footerLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              className="hover:underline transition"
              aria-label={link.label}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
