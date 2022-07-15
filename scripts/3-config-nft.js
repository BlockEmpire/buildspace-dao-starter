import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xDB067C86ABe60559746e3fa6Ca7bd41AB8C2FB58");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Way of the Daopao",
        description: "This NFT will give you access to InvestmentDAO!",
        image: readFileSync("scripts/assets/investmentnetwork.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();