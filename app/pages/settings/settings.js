import React from "react";
import { Container } from "../../layouts/container";
import { ContentWrapper } from "../../layouts/content-wrapper";
import { Heading } from "@chakra-ui/react";

export default function Settings() {
  return (
    <Container title="Settings | Chingu Board">
      <ContentWrapper>
        <Heading as="h2" textAlign="center" variant="h2">
          Settings
        </Heading>
      </ContentWrapper>
    </Container>
  );
}


// import React from "react";
// import { Provider } from "next-auth/client";
// import "../styles/globals.css";
// /* Fonts */
// import "@fontsource/sora";
// import "@fontsource/antic-didone";
// import "@fontsource/baloo-bhai-2";

// // Global store for server side data for a user
// import { UserProvider } from "../context/useUserStore";

// if (process.env.NODE_ENV === "development") {
//   if (typeof window === "undefined") {
//     const { server } = require("../../__mocks__/server");
//     server.listen({
//       warnOnUncaptured: false,
//     });
//   } else {
//     const { worker } = require("../../__mocks__/browser");
//     worker.start({
//       warnOnUncaptured: false,
//     });
//   }
// }

// import customTheme from "../styles/theme";
// import { ChakraProvider } from "@chakra-ui/react";

// export default function Settings ({ Component, pageProps }) {
//     return (
//       // next auth provider
//       <Provider session={pageProps.session}>
//         {/* user server data store provider */}
//         <UserProvider>
//           {/* chakra theme */}
//           <ChakraProvider theme={customTheme}>
//             <Component {...pageProps} />
//           </ChakraProvider>
//         </UserProvider>
//       </Provider>
//     );
//   }
