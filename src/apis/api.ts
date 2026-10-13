const BASE_URL = 'https://openapi.programming-hero.com/api/bazardor';

export const getAllCategories = async () => {
    const res = await fetch(`${BASE_URL}/categories`);
    if (!res.ok) throw new Error('ক্যাটাগরি লোড করা যায়নি');
    return res.json();
}

export const getSingleCategoty = async (categoryName: string) => {


    const res = await fetch(`${BASE_URL}/categories/${categoryName}`);
    if (!res.ok) throw new Error('ক্যাটাগরি পাওয়া যায়নি আবার চেস্টা করুন');
    return res.json();
}

export const getAllProducts = async () => {
    const res = await fetch(`${BASE_URL}/products`, {
        cache: 'force-cache'
    });
    if (!res.ok) throw new Error('প্রোডাক্ট লোড করা যায়নি');
    return res.json();
}

export const getProductsByCategory = async (categoryName: string) => {
    const res = await fetch(`${BASE_URL}/products?category=${categoryName}`);
    if (!res.ok) throw new Error('ফিল্টার করা প্রোডাক্ট পাওয়া যায়নি');
    return res.json();
}

export const getSingleProduct = async (id: string) => {
    const res = await fetch(`${BASE_URL}/products/${id}`, {
        next: { revalidate: 10 }
    });
    if (!res.ok) throw new Error('প্রোডাক্ট পাওয়া যায়নি');
    return res.json();
}