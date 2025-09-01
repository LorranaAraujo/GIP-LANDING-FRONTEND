"use client";

import { MantineProvider } from "@mantine/core";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Classificacao from "@/components/Classificacao";
import Etapas from "@/components/Etapas";
import Ferramentas from "@/components/Ferramentas";
import Governanca from "@/components/Governanca";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Rodape from "@/components/Rodape";
import SobreGIP from "@/components/SobreGIP";
//import { Metadata } from "next";


{/*export const metadata: Metadata = {
  title: 'Meu Site',
  icons: {
    icon: '/favicon.ico', // caminho para o favicon
  },
};*/}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <MantineProvider
          theme={{
            fontFamily: "Figtree",
            colors: {
              primary: [
                "#EDF8FD", // 50
                "#DBEDF5", // 100
                "#B2DAED", // 200
                "#86C7E5", // 300
                "#66B6DF", // 400
                "#3992C2", // 500
                "#15719A", // 600
                "#0E4F6C", // 700
                "#003F5B", // 800
                "#063246", // 900
              ],
            },
            primaryColor: "primary",
          }}
        >
          {children}
        </MantineProvider>

      </body>
    </html>
  );
}
