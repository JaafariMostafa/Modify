import ProductsPage from "./Pages/ProductsPage";
import TemplatesPage from "./Pages/TemplatesPage";

export default async function page({ params }) {
    const PAGE_ID = await params.pageid;
    switch (PAGE_ID) {
        case 'products':
            return <ProductsPage />
        case 'mytemplates':
            return <TemplatesPage />
        default:
            break;
    }
}