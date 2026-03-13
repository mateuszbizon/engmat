import { client } from "../lib/client";
import { GET_RECENT_BLOGS_QUERY } from "../lib/queries";

export async function getRecentPosts() {
    try {
        const posts = await client.withConfig({ useCdn: true }).fetch(GET_RECENT_BLOGS_QUERY);

        return {
            posts: posts || [],
            success: true,
            message: ""
        }
    } catch (error) {
        console.error("Błąd podczas pobierania najnowszych postów:", error)

        return {
            posts: [],
            success: false,
            message: "Błąd podczas pobierania najnowszych postów"
        }
    }
}