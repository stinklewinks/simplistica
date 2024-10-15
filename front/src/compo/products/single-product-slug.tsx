import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';  // Import useParams

interface SingleProductInterface {
    id: number;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
    category: {
        id: number; // Might need to fetch another endpoint here
        name: string;
    },
    productImage: {
        id: number;
        src: string;
    },
    productTag: {
        id: number;
        name: string; // Need to fetch the tag from another API endpoint
    },
    class_list: {
        name: string[]; // Will need to filter through an array to create a class lidt
    }
}

interface AuthorInterface {
    name: string;
    description: string;
}

function SingleProductSlug() {
    const { slug } = useParams<{ slug: string }>();  // Extract postId from the URL params
    const [product, setProduct] = useState<SingleProductInterface | null>(null);
    const [] = [];
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
    

    })
}
export default SingleProductSlug;
