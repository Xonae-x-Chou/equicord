export default {
    name: "NewOldProfiles",
    description: "Port test",
    authors: [{ name: "KingGamingYT" }],

    async start() {
        console.log("Loading NewOldProfiles...");
        const mod = await import("./src/index.js");
        console.log(mod);
    },

    stop() {}
};