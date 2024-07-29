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

As the Protocol specification and related technologies evolve, the commitment to achieving a vision of trustless, governance-minimized, and ethos-aligned liquid staking remains steadfast.

The scorecard below shows how the Lido ecosystem is doing. Feedback from everyone is welcome on the [research forum](https://{{research}}/).

## Already succeeded

:::scorecard-table
rows:
  - scorecard-attribute: "Operators run their own nodes (no white-labeling)"
    categories: "Validator set"
    self-assessment: "Good"
  - scorecard-attribute: "Good performance"
    categories: "Validator set"
    self-assessment: "Good"
    comments: "[The average performance of the Lido protocol validator set](https://explorer.rated.network/o/Lido?timeWindow=30d) is higher than [the average Network performance](https://explorer.rated.network/?timeWindow=30d) based on the [RAVER methodology](https://docs.rated.network/methodologies/ethereum-beacon-chain/rated-effectiveness-rating) available at the moment of assessment (March 2024)."
  - scorecard-attribute: "Operators should receive enough network rewards to build a sustainable, dependable staking business"
    categories: "Validator set"
    self-assessment: "Good"
  - scorecard-attribute: "Withdrawal requests are automatically fulfilled"
    categories: "Validator set"
    self-assessment: "Good"
    comments: "The Lido protocol has a [subsystem](https://{{ethereum_docs}}/contracts/withdrawal-queue-erc721#what-is-withdrawalqueueerc721) which can self-execute withdrawals with no human participation, apart from requiring Node Operators to maintain tooling (their own or [open-source alternatives](https://github.com/lidofinance/validator-ejector/)) to process requests (semi-)automatically. This subsystem ensures withdrawal requests can’t be cancelled (within a bounded period of time) and is designed to work even during chaotic tail-risk scenarios. The total volume of withdrawals processed since May (withdrawals implementation) can be found on the [dedicated Dune dashboard](https://dune.com/embeds/2475364/4072036)."
  - scorecard-attribute: "No operator has more than 1% of the total stake"
    categories: "Validator set"
    self-assessment: "Good"
    comments: "As at Q4/2023, most operators have less than 1% of the total ETH staked. No operator has more than 1.1% of the total ETH staked. Quarterly updates on the details and ratio of amount of stake that is over the soft-ceiling can be found in the [Lido Validator and Node Operator Metrics (VaNOM) web-app](https://app.hex.tech/8dedcd99-17f4-49d8-944e-4857a355b90a/app/3f7d6967-3ef6-4e69-8f7b-d02d903f045b/latest)."
  - scorecard-attribute: "Lido Protocol governance lives on Ethereum"
    categories: "Security"
    self-assessment: "Good"
    comments: "Ethereum community  potentially could change  the protocol with an emergent hard-fork (if there is a consensus to do it) that changes a few bits in the governance contract to revoke the DAO’s oversight permissions."
  - scorecard-attribute: "Lido Protocol is easy to fork"
    categories: "Security"
    self-assessment: "Good"
    comments: "Open-source development enables Lido protocol clone deployment and running without any DAO votes or third-party permissions."
  - scorecard-attribute: "Withdrawal credentials are non-custodial being managed by a smart-contact maintained by LDO tokenholders"
    categories: "Security"
    self-assessment: "Good"
    comments: "[All](https://twitter.com/LidoFinance/status/1646977448410480643) Lido on Ethereum participating validators use 0x01 (smart contract) withdrawal credentials."
  - scorecard-attribute: "Smart contracts are shielded using best-in-class security standards"
    categories: "Security"
    self-assessment: "Good"
    comments: "The currently deployed protocol version (Lido V2) is audited by four independent top-tier audit providers:\_[Statemind](https://github.com/lidofinance/audits/#04-2023-statemind-lido-v2-audit), [Certora](https://github.com/lidofinance/audits/#04-2023-certora-lido-v2-audit), [Hexens](https://github.com/lidofinance/audits/#04-2023-hexens-lido-v2-smart-contract-audit), [Oxorio](https://github.com/lidofinance/audits/?tab=readme-ov-file#05-2023-oxorio-lido-v2-on-chain-audit).\n\nThere is a formal verification executed by Certora (see the report above). All protocol levers are documented and reviewed by Statemind,\_[see](https://github.com/lidofinance/audits/?tab=readme-ov-file#10-2023-statemind-lido-roles-analysis).\n\nLast but not least, every protocol upgrade and voting is a subject of running full-blown regression\_[test suite](https://github.com/lidofinance/scripts/tree/master/tests)."
  - scorecard-attribute: "Distributed variation of on-premise infra and cloud providers"
    categories: "Validator set"
    self-assessment: "Good"
    comments: "Reliance on public cloud services has decreased significantly from 45%-50% in Q4/2023 to 38%-40% in Q1/2024. The majority of Node Operators now utilize some form of Bare Metal (Colocated, On-Premises or Dedicated hardware). Details can be found in the [Lido VaNOM web-app](https://app.hex.tech/8dedcd99-17f4-49d8-944e-4857a355b90a/app/3f7d6967-3ef6-4e69-8f7b-d02d903f045b/latest?selectedStaticCellId=fd91537b-e4b5-42b6-813d-6ec0ff957cd3)."
  - scorecard-attribute: "Client Diversity"
    categories: "Validator set"
    self-assessment: "Good"
    comments: "As at Q4/2023, Node Operators using the Lido protocol continue to utilize a [well-balanced suite of Consensus Layer clients](https://app.hex.tech/8dedcd99-17f4-49d8-944e-4857a355b90a/app/3f7d6967-3ef6-4e69-8f7b-d02d903f045b/latest?tab=client-diversity) in aggregate. Execution Layer diversity significantly improved as a result of [Node Operator commitments to reduce their reliance on Geth as a supermajority client](https://research.lido.fi/t/ethereum-node-operator-el-diversity-improvement-commitments/6459). Geth usage is currently at 46% over the curated set."
:::

## Doing well, but can improve

:::scorecard-table
rows:
  - scorecard-attribute: "Distributed geographically"
    categories: "Validator set"
    self-assessment: "Okay"
    comments: "As at Q4/2023, less than 22% of validators are currently with North-America (US+Canada) based Node Operators, but there remains an over-reliance on European based entities. Improvements have been noted in not only the addition of Asian and South American-based operators, but also the distribution  of validators across under-represented geographies. However, the DAO can continue to promote geographical diversity [latest stats can be found here](https://app.hex.tech/8dedcd99-17f4-49d8-944e-4857a355b90a/app/3f7d6967-3ef6-4e69-8f7b-d02d903f045b/latest?selectedStaticCellId=be392244-4d90-4212-9492-d07ded405735)."
  - scorecard-attribute: "Best practices in security and key management"
    categories: "Validator set"
    self-assessment: "Okay"
    comments: "In the Curated Operator module, keys are managed by professional node operators. [As of the Q4/23, 23.8% of validators in the module](https://app.hex.tech/8dedcd99-17f4-49d8-944e-4857a355b90a/app/3f7d6967-3ef6-4e69-8f7b-d02d903f045b/latest) utilize Attestant’s Vouch CL client. While Vouch utilization does not directly correlate to usage of Attestants Dirk key manager that includes threshold signing, it is roughly indicative. In the Simple DVT Module, participants utilize Obol and SSV Network based DVT. All validator keys are created through a Distributed Key Generation process, with no single Node Operator controlling a full private key at any point of their existence."
  - scorecard-attribute: "Node operators are disincentivized from acting maliciously"
    categories: "Validator set"
    self-assessment: "Okay"
    comments: "Currently, if Node Operators don’t process exits on time (in other words, try to block users from obtaining their withdrawn ETH), they suffer penalties (automatically enforced by the protocol, as well as reputational). [Triggerable execution layer exits](https://ethereum-magicians.org/t/eip-7002-execution-layer-triggerable-exits/14195), expected in Q4 2024, will make it possible to exit validators based on a DAO vote."
  - scorecard-attribute: "Lido DAO can’t suddenly change the validator set"
    categories: "Validator set"
    self-assessment: "Okay"
    comments: "As it stands, LDO holders cannot force Node operators to exit. Even if triggerable exits were live today, it would still take the DAO half a year, at a minimum, to rotate all validators (due to the mechanics of how the staking queue works). In order to create additional checks and balances on Lido governance, [dual governance proposed](https://{{research}}/t/ldo-steth-dual-governance-continuation/5727). It gives stakers ability to withdraw their Eth in the event of a proposal that would change the validator set, while also enabling them to express concerns about it. Onchain vote to deploy expected in Q3/Q4 2024."
:::

## Needs Improvement

These attributes need work, and below is information about what contributors are already doing as solutions and improvements.\
Improvement proposals and comments are welcome from anyone.

:::scorecard-table
rows:
  - scorecard-attribute: "Governance has significant safeguards"
    categories: "Governance"
    self-assessment: "Needs improvement"
    comments: "A two-step Aragon voting is used with objection periods, where only 'against' votes are possible in the second phase. The governance process includes 3 steps: discussion, off-chain vote, and on-chain execution which make all changes publicly socialized before implementation. \\\nCurrently, operators act as a check on LDO power since they cannot be forced to exit.\\\n[Dual governance](https://hackmd.io/@skozin/SJdSE51Ep) allows stakers to withdraw their Eth in the event of a contentious proposal, while also enabling them to express concerns about its contentiousness. Onchain vote to deploy expected in Q3/Q4 2024."
  - scorecard-attribute: "There’s a robust set of governance delegates"
    comments: "Currently, delegation is supported only via Snapshot, with an on-chain feature slated for launch in April-May 2024. After addressing technical challenges, an open delegation framework to diversify governance participation is planned to propose."
    categories: "Governance"
    self-assessment: "Needs improvement"
  - scorecard-attribute: "Delegation is enabled in on-chain governance"
    categories: "Governance"
    self-assessment: "Needs improvement"
    comments: "Delegation is currently only enabled on Snapshot. However, the proposal for the development and launch of on-chain delegation has reached quorum, and an Aragon vote to activate on-chain delegation is expected in April-May 2024."
  - scorecard-attribute: "There is a way for stakers to resist malicious governance capture"
    categories: "Governance"
    self-assessment: "Needs improvement"
    comments: "Lido on Ethereum, governed by LDO token voting, manages various aspects including the treasury, withdrawal keys, and lists of nodes or oracles, effectively granting root access to the voting app. [Dual governance](https://hackmd.io/@skozin/SkjuZAuip) allows stakers to withdraw their Eth in the event of a contentious proposal, while also enabling them to express concerns about its contentiousness. When a specified amount of stETH accumulates in the DG veto vault, execution of LDO governance motions is paused unless the stETH in the vault is withdrawn. The design includes multiple safeguards and potential de-escalation mechanisms. A [Snapshot vote on this proposal passed](https://snapshot.org/#/lido-snapshot.eth/proposal/0x3bdf528b31956e029e867ebf79b02ee07e9a973987b34c5cffc14392e8b4480c), with on-chain deployment slated for Q3-Q4 2024."
  - scorecard-attribute: "There’s a way for operators to permissionlessly enter the set and prove themselves"
    categories: "Validator set"
    self-assessment: "Needs improvement"
    comments: "Lido V2’s [Staking Router](https://{{blog}}/introducing-lido-v2/#overview) is a controller contract which paves the way for permissionless operators to join Lido’s validator set. The first permissionless module called [CSM](https://{{research}}/t/community-staking-module/5917) is planned to be proposed to on-chain vote by the end of 2024."
:::