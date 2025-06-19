import * as crypto from "node:crypto";
import { describe } from "vitest";
import type { Uuid } from "#/common/types";
import collectionJson from "./data/owned.collection.json";
import queryJson from "./data/owned.query.json";
import { createFixture } from "./fixture/fixture";

describe("builders.test.ts", () => {
  const { test, beforeAll, afterAll } = createFixture();

  collectionJson._id = crypto.randomUUID().toString() as Uuid;
  queryJson._id = crypto.randomUUID().toString() as Uuid;

  beforeAll(async (_c) => {});
  afterAll(async (_c) => {});

  test("cant be", async ({ c }) => {
    c.expect(true).toBeTruthy();
  });

  // it("can create an owned collection", async ({ expect }) => {
  //   const _results = await bsvClient.createCollection(
  //     collectionJson as CreateCollectionRequest,
  //   );
  //
  //   const profiles = await bsvClient.readBuilderProfile();
  //   const [_name, profile] = Object.entries(profiles).at(0)!;
  //   expect(profile.data.collections).toHaveLength(1);
  //   expect(profile.data.collections.at(0)).toBe(collectionId);
  // });
  //
  // it("a user can upload data", async ({ expect }) => {
  //   const delegation = NucTokenBuilder.extending(bsvClient.rootToken)
  //     .command(NucCmd.nil.db.data.create)
  //     .audience(usvClient.did)
  //     .expiresAt(Date.now() + 1000 * 60)
  //     .build(bsvClient._options.keypair.privateKey());
  //
  //   const envelope = NucTokenEnvelopeSchema.parse(delegation);
  //
  //   const result = await usvClient.createData({
  //     body: {
  //       owner: usvClient.did.toString(),
  //       acl: {
  //         grantee: bsvClient.did.toString(),
  //         read: true,
  //         write: false,
  //         execute: true,
  //       },
  //       collection: collectionId,
  //       data: [
  //         {
  //           _id: crypto.randomUUID().toString(),
  //           name: "tim",
  //         },
  //       ],
  //     },
  //     delegation: envelope,
  //   });
  //
  //   console.log(result);
  //
  //   expect(result).toBeDefined();
  // });
});
