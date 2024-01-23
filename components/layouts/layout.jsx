import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>Acumulado</title>
      </Head>

      <main style={{ padding: "20px" }}>
        <h2 style={{ padding: "20px", textDecoration: "underline" }}>
          Acumulado Grilla
        </h2>
        {children}
      </main>
    </>
  );
}
