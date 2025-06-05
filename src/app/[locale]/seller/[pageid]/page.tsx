import ProductsPage from "./Pages/ProductsPage";

export default function Page({ params }) {
    const PAGE_ID = params.pageid;
    switch (PAGE_ID) {
        case 'products':
            return <ProductsPage />
        default:
            break;
    }
}