const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

async function getProperties() {
    try {
        if (!apiDomain) {
            return [];
        }

        const res = await fetch(`${apiDomain}/properties`);
  
        if (!res.ok) {
            throw new Error('An error occurred while fetching the data');
        }
  
        return res.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

async function getProperty(id) {
    try {
        if (!apiDomain) {
            return null;
        }

        const res = await fetch(`${apiDomain}/properties/${id}`);
  
        if (!res.ok) {
            throw new Error('An error occurred while fetching the data');
        }
  
        return res.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}

export { getProperties, getProperty };