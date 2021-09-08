import { create, globSource } from "ipfs-http-client";
export { globSource };
export default create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
});
