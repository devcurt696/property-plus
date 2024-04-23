import '@/assets/styles/globals.css';


export const metadata = {
    title: 'Property Plus | Find your dream home',
    description: 'Find your dream home with Property Plus',
    keywords: 'property, real estate, home, house, rent, buy, sell',
}

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <div>{children}</div>
        </body>
    </html>
  )
}

export default MainLayout