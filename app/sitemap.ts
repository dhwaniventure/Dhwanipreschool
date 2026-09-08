import type { MetadataRoute } from 'next'
import { readBlog } from "@/lib/actions/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap>  {
    let { data: blogs } = await readBlog();

    // Map blogs to postEntries with required properties
    const postEntries: MetadataRoute.Sitemap = (blogs || []).map((blog) => ({
        url: `${process.env.SITE_URL}/blog/${blog?.slug}`,
        lastModified: new Date(blog.created_at),
        changeFrequency: 'weekly', // Default value
        priority: 0.5, // Default value
    }));

    // Static entries for website endpoints
    const staticEntries: MetadataRoute.Sitemap = [
        { url: `${process.env.SITE_URL}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
        { url: `${process.env.SITE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${process.env.SITE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${process.env.SITE_URL}/admission`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${process.env.SITE_URL}/Ourcenters`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${process.env.SITE_URL}/Programs`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${process.env.SITE_URL}/Whyus`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${process.env.SITE_URL}/career`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
        { url: `${process.env.SITE_URL}/franchise`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
        { url: `${process.env.SITE_URL}/enroll`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    ];

    // Combine static entries with postEntries
    const allEntries: MetadataRoute.Sitemap = [...staticEntries, ...postEntries];

    return allEntries;
}
