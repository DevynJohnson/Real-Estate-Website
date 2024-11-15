function myFunction() {
    var x = document.getElementById("myNav");
    if (x.className === "nav-menu") {
        x.className += " responsive";
    } else {
        x.className = "nav-menu";
    }
}

// Attempting to embed elise_johnson_realtor's most recent Instagram post dynamically
// May require API key or other authentication from that account

// async function embedInstagramPost(username) {
//     try {
//         // Fetch the most recent post URL from the Instagram account
//         const response = await fetch(`https://www.instagram.com/elise_johnson_realtor/?__a=1`);
//         const data = await response.json();
//         const recentPostUrl = data.graphql.user.edge_owner_to_timeline_media.edges[0].node.shortcode;

//         // Use the oEmbed API to get the embed HTML
//         const oEmbedResponse = await fetch(`https://api.instagram.com/oembed?url=https://www.instagram.com/p/https://www.instagram.com/p/DCHHk3wvCLa//`);
//         const oEmbedData = await oEmbedResponse.json();

//         // Insert the embed HTML into the #mostRecentPost element
//         document.getElementById('mostRecentPost').innerHTML = oEmbedData.html;

//         // Optionally, reparse the Instagram embed script to render the post correctly
//         if (window.instgrm) {
//             window.instgrm.Embeds.process();
//         }
//     } catch (error) {
//         console.error('Error embedding Instagram post:', error);
//     }
// }

// // Call the function with the Instagram username
// embedInstagramPost(elise_johnson_realtor);


