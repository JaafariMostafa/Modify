import ProductsPage from "./Pages/ProductsPage";
import TemplatesPage from "./Pages/TemplatesPage";

interface PageProps {
    params: Promise<{
        pageid: string;
    }>;
}

export default async function page({ params }: PageProps) {
    const { pageid: PAGE_ID } = await params;
    
    switch (PAGE_ID) {
        case 'products':
            return <ProductsPage />
        case 'mytemplates':
            return <TemplatesPage />
        default:
            return (
                <div>
                    Sorry {PAGE_ID} not found
                </div>
            );
    }
}