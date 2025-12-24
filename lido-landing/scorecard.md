---
title: Lido on Ethereum Scorecard
description: >
  Keep track of the latest updates on how Lido is performing against its goal of
  being decentralized, trustless, governance-minimized and ethos-aligned with
  the Ethereum community.
---

Lido DAO’s purpose is to keep Ethereum decentralized, accessible to all, and resistant to censorship.

Lido DAO’s mission is to make staking simple, secure, and decentralized.

And the endgame is a world in which Ethereum is the co-ordination and value layer of the internet.

As the Protocol specification and related technologies evolve, the commitment to achieving a vision of trustless,
governance-minimized, and ethos-aligned liquid staking remains steadfast.

The scorecard below shows how the Lido ecosystem is doing. Feedback from everyone is welcome on
the [research forum](https://{{research}}/).

## Already succeeded

:::scorecard-table
rows:

- scorecard-attribute: "Operators run their own nodes (no white-labeling)"
  categories: "Validator set"
  self-assessment: "Good"
- scorecard-attribute: "Good performance"
  categories: "Validator set"
  self-assessment: "Good"
  comments: "[The average performance of the Lido protocol validator set](https://explorer.rated.network/o/Lido?timeWindow=30d)
  is higher than [the average Network performance](https://explorer.rated.network/?timeWindow=30d) based on
  the [RAVER methodology](https://docs.rated.network/documentation/methodologies/ethereum/rated-effectiveness-rating/rated-effectiveness-rating)
  available at the moment of assessment (December 2025)."
- scorecard-attribute: "Operators should receive enough network rewards to build a sustainable, dependable staking
  business"
  categories: "Validator set"
  self-assessment: "Good"
- scorecard-attribute: "Withdrawal requests are automatically fulfilled"
  categories: "Validator set"
  self-assessment: "Good"
  comments: "The Lido protocol has
  a [subsystem](https://{{ethereum_docs}}/contracts/withdrawal-queue-erc721/#what-is-withdrawalqueueerc721) that ensures
  withdrawal requests are executed without relying solely on
  manual operator actions. Since May 2023, Node Operators have used their own
  or [open-source tooling](https://github.com/lidofinance/validator-ejector/) to process exits
  automatically, and all withdrawals have been fulfilled.\_\n\n With the introduction of Triggerable Withdrawals (TWs),
  exits
  can now also be triggered by the DAO. This removes the remaining “hostage risk” from operator refusal or negligence,
  while introducing a new governance responsibility for the DAO. The total volume of processed withdrawals can be found
  on the dedicated Dune dashboard."
- scorecard-attribute: "No operator has more than 1% of the total stake"
  categories: "Validator set"
  self-assessment: "Good"
  comments: "As of Q3/2025, each operator continues to operate, via Lido, less than 1% of total stake across the entire
  Ethereum network, taking into account cross-module totals. Quarterly updates on the details and ratio of amount of
  stake that is over the soft-ceiling can be found in
  the\_[Lido Validator and Node Operator Metrics (VaNOM) web-app](https://app.hex.tech/8dedcd99-17f4-49d8-944e-4857a355b90a/app/3f7d6967-3ef6-4e69-8f7b-d02d903f045b/latest).
  Additionally, through the Simple DVT Module and the Community Staking Module, hundreds of net new operators have
  already started using the Lido protocol in 2024, further reducing concentration of stake share amongst large
  entities."
- scorecard-attribute: "Lido Protocol governance lives on Ethereum"
  categories: "Security"
  self-assessment: "Good"
  comments: "Ethereum community potentially could change the protocol with an emergent hard-fork (if there is a
  consensus to do it) that changes a few bits in the governance contract to revoke the DAO’s oversight permissions."
- scorecard-attribute: "Lido Protocol is easy to fork"
  categories: "Security"
  self-assessment: "Good"
  comments: "Open-source development enables Lido protocol clone deployment and running without any DAO votes or
  third-party permissions."
- scorecard-attribute: "Withdrawal credentials are non-custodial being managed by a smart-contact maintained by LDO
  tokenholders"
  categories: "Security"
  self-assessment: "Good"
  comments: "[All](https://x.com/LidoFinance/status/1646977448410480643) Lido on Ethereum participating validators use
  0x01 (smart contract) withdrawal credentials. In 2026, the majority of the validators will be migrating to 0x02
  withdrawal credential type."
- scorecard-attribute: "Smart contracts are shielded using best-in-class security standards"
  categories: "Security"
  self-assessment: "Good"
  comments: "The major protocol version (Lido V2) is audited by four independent top-tier audit
  providers:\_[Statemind](https://github.com/lidofinance/audits/#04-2023-statemind-lido-v2-audit), [Certora](https://github.com/lidofinance/audits/#04-2023-certora-lido-v2-audit)(
  including formal
  verification), [Hexens](https://github.com/lidofinance/audits/#04-2023-hexens-lido-v2-smart-contract-audit), [Oxorio](https://github.com/lidofinance/audits/?tab=readme-ov-file#05-2023-oxorio-lido-v2-on-chain-audit).
  The latest deployed [V2.1](https://github.com/lidofinance/core/releases/tag/v2.1.0) release has been audited
  by [MixBytes](https://github.com/lidofinance/audits/blob/main/MixBytes%20Lido%20CSM%20Security%20Audit%20Report%2010-24.pdf)
  and [Ackee Blockchain](https://github.com/lidofinance/audits/blob/main/Ackee%20Blockchain%20Lido%20Staking%20Router%20v2%20Report%2010-24.pdf) (
  including extensive fuzzing test coverage).\_\n\nThe full list of the Lido on Ethereum protocol audits is
  available [publicly](https://{{ethereum_docs}}/security/audits/#lido-on-ethereum).\n\nEach protocol upgrade and voting
  is a subject of running full-blown regression [test suite](https://github.com/lidofinance/scripts/tree/master/tests)."
- scorecard-attribute: "Client Diversity"
  categories: "Validator set"
  self-assessment: "Good"
  comments: "As of Q3/2025, Node Operators using the Lido protocol continue to utilize
  a\_[well-balanced suite of Consensus Layer clients](https://app.hex.tech/8dedcd99-17f4-49d8-944e-4857a355b90a/app/3f7d6967-3ef6-4e69-8f7b-d02d903f045b/latest?tab=client-diversity)
  \_in aggregate. Execution Layer diversity significantly improved as a result
  of [Node Operator commitments to reduce their reliance on Geth as a supermajority client](https://{{research}}/t/ethereum-node-operator-el-diversity-improvement-commitments/6459).
  \_Nethermind remains the dominant Execution Layer client with 39.8% usage, slightly ahead of Geth at 37.1%."
- scorecard-attribute: "Delegation is enabled in on-chain governance"
  categories: "Governance"
  self-assessment: "Good"
  comments: "[The on-chain delegation was enabled](https://{{vote}}/vote/178) in August 2024. Now LDO
  holders [can delegate](https://{{vote}}/delegation) on Aragon& Snapshot. The delegated LDO amounts and delegates'
  activity can be viewed on the [Lido Delegation Public Dashboard](https://dune.com/lido/lido-delegations)."
- scorecard-attribute: "There’s a way for operators to permissionlessly enter the set and prove themselves"
  categories: "Validator set"
  self-assessment: "Good"
  comments: "The Community Staking Module (CSM) is Lido’s permissionless module that allows independent node operators
  to join and leave the Lido operator set without going through a governance-driven onboarding process. Instead of
  curated entry, operators provide a bond and register directly through the CSM smart contracts.
  With CSM live, anyone who meets the technical requirements and provides the required bond can permissionlessly enter
  the set, receive rewards, and later exit by withdrawing their bond and completing validator offboarding. This unlocks
  true openness and decentralization for Lido’s operator ecosystem."
- scorecard-attribute: "Staking with Lido protocol is accessible via decentralized front-ends"
  categories: "Security"
  self-assessment: "Good"
  comments: "Lido on Ethereum Liquid Staking Widget is deployed to
  the [IPFS](https://{{ethereum_docs}}/ipfs/apps-list/)."
- scorecard-attribute: "Governance has significant safeguards"
  categories: "Governance"
  self-assessment: "Good"
  comments: "Governance includes open discussion, LDO voting (off-chain and on-chain), and
  a [Dual Governance](https://dg.{{landing}}/) challenge window for stETH holders. On-chain voting runs in two phases:
  the main vote, then an objection period for 'against' votes only. Tokenholders can override their delegates' votes at
  any time by voting directly. Dual Governance lets stETH holders delay execution and exit before contentious proposals
  are enacted. This process balances different interests and provides strong safeguards that protect the protocol from
  rushed or harmful decisions."
- scorecard-attribute: "There is a way for stakers to resist malicious governance capture"
  categories: "Governance"
  self-assessment: "Good"
  comments: "Lido on Ethereum is governed by LDO token voting, but proposals affecting core protocol functions must pass
  through [Dual Governance](https://dg.{{landing}}/). This prevents LDO holders from bypassing safeguards and makes
  hostile takeovers harder. \\\nDual Governance gives stETH holders power to safely exit through a dynamic timelock
  mechanism facilitated by an escrow contract that accepts stETH, wstETH, and withdrawal NFTs. \\\nWith >1% of the total
  stETH supply in the escrow, Veto Signalling is activated. This blocks governance motions for 5 to 45 days, depending
  on the amount of opposing tokens. \\\nWith >10% of the total stETH supply in the escrow, Rage Quit is triggered.
  Governance stays paused until opposing stakers exit the protocol."
  :::

## Doing well, but can improve

:::scorecard-table
rows:

- scorecard-attribute: "Distributed geographically"
  categories: "Validator set"
  self-assessment: "Okay"
  comments: "As of Q3/2025, approximately 20% of validators are still operated by North America–based Node Operators (US
  and Canada), while European entities continue to dominate the landscape at 62%. Progress in expanding geographical
  diversity—through the inclusion of operators from Asia and South America, as well as broader validator
  distribution—remains evident, though largely unchanged from the previous quarter. Continued community efforts are
  encouraged to further promote decentralization across
  regions.\_[Latest stats can be found here](https://app.hex.tech/8dedcd99-17f4-49d8-944e-4857a355b90a/app/3f7d6967-3ef6-4e69-8f7b-d02d903f045b/latest?selectedStaticCellId=be392244-4d90-4212-9492-d07ded405735)."
- scorecard-attribute: "Best practices in security and key management"
  categories: "Validator set"
  self-assessment: "Okay"
  comments: "In the Curated Operator module, keys are managed by professional node
  operators.\_[As of Q3/25, 22.6% of validators in the module](https://app.hex.tech/8dedcd99-17f4-49d8-944e-4857a355b90a/app/3f7d6967-3ef6-4e69-8f7b-d02d903f045b/latest)
  \_utilize Attestant’s Vouch CL client. While Vouch utilization does not directly correlate to usage of Attestants Dirk
  key manager that includes threshold signing, it is roughly indicative. In the Simple DVT Module, participants utilize
  Obol and SSV Network based DVT. All SDVT validator keys are created through a Distributed Key Generation process, with
  no single Node Operator (or other party) controlling a full private key at any point of their existence."
- scorecard-attribute: "Node operators are disincentivized from acting maliciously"
  categories: "Validator set"
  self-assessment: "Okay"
  comments: "Currently, if Node Operators don’t process exits on time (in other words, try to block users from obtaining
  their withdrawn ETH), they suffer penalties (automatically enforced by the protocol, as well as reputational). The
  Triggerable Exits framework is live on the Lido protocol as of October 2025. It allows validators to be exited from
  the Execution Layer without any participation from the NO. NOs will generally still be expected to process exits via
  the Consensus Layer in fair weather, as it is cheaper and more efficient compared to Execution Layer driven triggered
  withdrawals. However, the Triggerable Withdrawals framework introduces an additional fallback mechanism if regular
  exit steps are not carried out, substantially reducing trust assumptions towards NOs and Oracles."
- scorecard-attribute: "Lido DAO can’t suddenly change the validator set"
  categories: "Validator set"
  self-assessment: "Okay"
  comments: "Historically, validator exits are performed at-will by Node Operators, upon request for a validator to be
  exited by the protocol's automated Validator Exit Bus. This continues to be the case for most validator exits (e.g.,
  in order to make ETH available for withdrawals) even with the Lido protocol’s support for Execution Layer Triggerable
  Withdrawals (TW).
  The TW framework is now live in the Lido protocol (as of October 2025) and enables validator exits to be initiated via
  the Execution Layer without requiring Node Operator involvement (subject to the applicable exit flow and request being
  in place). This allows the DAO to directly initiate validator exits in exceptional or emergency situations; however,
  the DAO’s use of TW for actions such as mass validator exits or stake re-allocation remains subject to the [Dual
  Governance](https://dg.{{landing}}/) mechanism. As a result, such actions cannot be executed unilaterally or
  immediately, and stETH holders
  retain the ability to signal concern, delay execution, and potentially exit their positions before changes take
  effect."
- scorecard-attribute: "There’s a robust set of governance delegates"
  categories: "Governance"
  self-assessment: "Okay"
  comments: "[Public Delegate Platform and Delegate Incentivization Program](https://snapshot.box/#/s:lido-snapshot.eth/proposal/0xa502cf80451192672313911ce558e74799626da3b3b66130e21c6cd19707e584)
  were established in August 2024. In Q4, 2024 Lido DAO has 7 delegates with more than 2M LDO delegated to each
  on-chain, which makes them eligible for incentives. You can
  see [all the public delegates here](https://{{vote}}/delegation)
  and [check delegates' voting participation here](https://dune.com/lido/lido-delegations)."
- scorecard-attribute: "DAO goals are easily accessible"
  categories: "Governance"
  self-assessment: "Okay"
  comments: "[The GOOSE framework](https://snapshot.box/#/s:lido-snapshot.eth/proposal/0x58bbc5d540e46081043ef29d4d1ee56b7df4dc1b0369aa78e0c15a2403549353)
  is utilized to set one-year and three-year goals.
  The [goals for 2026](https://snapshot.box/#/s:lido-snapshot.eth/proposal/0xeedef9fea3d782f192410768cabaf6974da40ef36e1d22c7f8fff5fd4cfc7a59)
  were adopted in November 2024, marking a new focus for the upcoming
  year.
- scorecard-attribute: "Distributed variation of on-premises infra and cloud providers"
  categories: "Validator set"
  self-assessment: "Okay"
  comments: "Reliance on public cloud continues to remain stable at 49% in Q3/2025. The usage is balanced against forms
  of Bare Metal (Colocated, On-Premises or Dedicated Hardware). Details can be found in
  the\_[Lido VaNOM web-app](https://app.hex.tech/8dedcd99-17f4-49d8-944e-4857a355b90a/app/3f7d6967-3ef6-4e69-8f7b-d02d903f045b/latest?selectedStaticCellId=fd91537b-e4b5-42b6-813d-6ec0ff957cd3)."
- scorecard-attribute: "Share of Permissionless Operators"
  categories: "Validator set"
  self-assessment: "Okay"
  comments: "Permissionless participation is key to decentralizing Lido’s validator set and reducing reliance on
  governance decisions or trusted relationships. It ensures that anyone meeting technical and performance requirements
  can join the protocol without needing approval, which strengthens trustlessness and network resilience.
  \_\n\nCurrently, around 5% of Lido’s stake is operated through the Community Staking Module (CSM). A proposal to raise
  CSM’s share to 10% has been approved but not yet implemented."
  :::

## Needs improvement

:::scorecard-table
rows:

- scorecard-attribute: "Validator Consolidation Progress"
  categories: "Validator set"
  self-assessment: "Needs improvement"
  comments: "Ethereum’s [EIP-7251](https://eips.ethereum.org/EIPS/eip-7251) has been implemented, enabling validators to
  consolidate balances above 32 ETH (up to
  2048 ETH). This reduces the total number of active validator indices and lowers network overhead, contributing to
  scalability and long-term protocol health. \_\n\nLido is preparing to adopt consolidation within its validator set as
  discussed [in this proposal]({{research_url}}/t/future-of-the-curated-module-cmv2-landscape/10929)."