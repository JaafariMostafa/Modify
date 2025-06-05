import ProductsPage from "./Pages/ProductsPage";

interface PageProps {
    params: {
        locale: string;
        pageid: string;
    };
}

export default function Page({ params }: PageProps) {
    const PAGE_ID = params.pageid;
    switch (PAGE_ID) {
        case 'products':
            return <ProductsPage />
        default:
            break;
    }
}