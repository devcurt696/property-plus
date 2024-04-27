import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';

export const metadata = {
    title: 'Property Plus | Find your dream home',
    description: 'Find your dream home with Property Plus',
    keywords: 'property, real estate, home, house, rent, buy, sell',
}

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
            <Navbar />
            <div>{children}</div>
            <Footer />
        </body>
      </html>
    </AuthProvider>
  )
}

export default MainLayout