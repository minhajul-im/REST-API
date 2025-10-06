import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { FaFacebookMessenger } from "react-icons/fa";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { useGeneralDataQuery } from "../../redux/features/api";

const ChatSpeedDial = () => {
  const { data } = useGeneralDataQuery();

  const phoneRaw = data?.generalData?.phone || "";
  const phoneForWhatsApp = phoneRaw.startsWith("88")
    ? phoneRaw
    : `88${phoneRaw}`;

  // Extract Messenger username from Facebook URL
  const facebookUrl = data?.generalData?.facebook || "";
  let fbUsername = "";
  if (facebookUrl) {
    try {
      const urlObj = new URL(facebookUrl);
      fbUsername = urlObj.pathname.replace(/^\/+|\/+$/g, "");
    } catch {
      fbUsername = facebookUrl.split("/").filter(Boolean).pop() || "";
    }
  }

  const actions = [
    {
      icon: <LocalPhoneIcon />,
      name: "Phone",
      href: `tel:${phoneRaw}`,
    },
    {
      icon: <WhatsAppIcon color="success" />,
      name: "WhatsApp",
      href: `https://wa.me/${phoneForWhatsApp}`,
    },
    {
      icon: <FaFacebookMessenger className="w-6 h-6 text-blue-500" />,
      name: "Messenger",
      href: fbUsername ? `https://m.me/${fbUsername}` : null,
    },
  ].filter((action) => action.href); // remove empty links

  return (
    <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="Chat options"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            tooltipTitle={action.name}
            icon={
              <a
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit" }}
              >
                {action.icon}
              </a>
            }
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default ChatSpeedDial;
