import backgroundImage from "/public/backgrounds/home.svg"

export default async function LocaleLayout({
    children
}: {
    children: React.ReactNode;
}) {

    return (

        <main className="main-top" style={{backgroundImage: `url(${backgroundImage.src})`}}>
            {children}
        </main>

    );
}
