---
title: Lido on Ethereum Scorecard
description: >
  Keep track of the latest updates on how Lido is performing against its goal of
  being decentralized, trustless, governance-minimized and ethos-aligned with
  the Ethereum community.
---
Lido started with a mission to keep Ethereum decentralized and to democratize access to staking on the Beacon Chain.

While the protocol specification and related technologies evolve, Lido continues to drive towards its vision of a trustless, governance-minimized, and ethos aligned liquid staking protocol.

The scorecard below shows how we are doing. We invite input and feedback from the Ethereum community to keep track along the way on our [research forum](https://research.lido.fi/).

## Where we’re already succeeding

While these attributes will remain under review, we assess Lido's performance to be 'Good'. We welcome community feedback on the attributes and how they are scored on our Research Forum.

:::scorecard-table
rows:
  - scorecard-attribute: "Distributed geographically and jurisdictionally"
    categories: "Validator set"
    self-assessment: "Good"
  - scorecard-attribute: "Operators run their own nodes (no white-labeling)"
    categories: "Validator set"
    self-assessment: "Good"
  - scorecard-attribute: "Good performance"
    categories: "Validator set"
    self-assessment: "Good"
  - scorecard-attribute: "Operators should earn enough to build a profitable, dependable staking business"
    categories: "Validator set"
    self-assessment: "Good"
  - scorecard-attribute: "Lido is easy to fork"
    categories: "Security"
    self-assessment: "Good"
    comments: "All it takes is to switch a few bits in the governance contract to revoke Lido DAO current permissions and transfer them to a community-owned contract."
  - scorecard-attribute: "Withdrawals"
    categories: "Validator set"
    self-assessment: "Good"
    comments: "The Lido team has developed an automated protocol that requests validators to exit in order to facilitate the withdrawal process."
  - scorecard-attribute: "Withdrawals are non-custodial and trustless"
    categories: "Security"
    self-assessment: "Good"
    comments: "[All](https://twitter.com/LidoFinance/status/1646977448410480643)\_Lido on Ethereum validators are now using 0x01 (smart contract) withdrawal credentials."
:::

## Where we’re doing well, but can improve

These attributes are more of a grey area with identified areas for improvement noted in the comments.

:::scorecard-table
rows:
  - scorecard-attribute: "No operators with over 1% of total stake of Ethereum through Lido"
    categories: "Validator set"
    self-assessment: "Okay"
    comments: "A few operators between 1% and 2%"
  - scorecard-attribute: "Distributed geographically and jurisdictionally"
    categories: "Validator set"
    self-assessment: "Okay"
    comments: "While ~10% of validators are currently with US-based Node Operators, there remains an over-reliance on European based entities. Lido will continue to select Node Operators in the interest of jurisdictional and geographic diversity as it expands the set and will publish this information transparently going forward"
  - scorecard-attribute: "Distributed variation of on-premise infra and different cloud providers"
    categories: "Validator set"
    self-assessment: "Okay"
    comments: "Not enough on-premise infra setups"
  - scorecard-attribute: "Best practices in security and key management"
    categories: "Validator set"
    self-assessment: "Okay"
    comments: "Keys are managed by professional node operators but distributed validator technology has not yet been introduced to Lido. Threshold based validation would be more robust, but remains work in progress and an active research focus."
  - scorecard-attribute: "Client Diversity"
    categories: "Validator set"
    self-assessment: "Okay"
    comments: "Prysm is not the dominant client in Lido (>58% minority client usage), but share of smaller clients could be higher.\n\nAdditionally, more work to be done on Execution Layer client diversification."
  - scorecard-attribute: "Lido’s smart contracts have the best security possible"
    categories: "Security"
    self-assessment: "Okay"
    comments: "Thorough and multiple audits are undertaken on all smart contract upgrades, but no formal verification or symbolic execution based tests"
  - scorecard-attribute: "Node operators are disincentivized from acting maliciously"
    categories: "Validator set"
    self-assessment: "Okay"
    comments: "Currently, if Node Operators don’t process exits on time (in other words, try to block users from obtaining their withdrawn ETH), they suffer penalties (automatically enforced by the protocol, as well as reputational).\n\n[Triggerable smart contract exits](https://ethresear.ch/t/withdrawal-credentials-exits-based-on-a-generalized-message-bus/12516/24), expected sometime in 2024, will keep Node Operators even more accountable to the Lido DAO (since exiting validators will be possible via a DAO vote)."
  - scorecard-attribute: "Lido DAO can’t suddenly change the validator set"
    categories: "Validator set"
    self-assessment: "Okay"
    comments: "As it stands, Lido governance cannot force Node operators to exit.\n\nEven if triggerable exits were live today, it would still take the DAO half a year, at a minimum, to rotate all validators (due to the mechanics of how the staking queue works).\n\nAdditionally, in order to create additional checks and balances on Lido governance, contributors are\_[exploring ways](https://research.lido.fi/t/ldo-steth-dual-governance/2382)\_to empower stETH holders to veto any decision that would change the validator set."
  - scorecard-attribute: "There’s a way for operators to permissionlessly enter the set and prove themselves"
    categories: "Governance"
    self-assessment: "Okay"
:::



## Needs Improvement

These attributes clearly need work and Lido is actively working on solutions and improvements. We welcome input from the DAO, our partners and the wider community as we seek solutions

:::scorecard-table
rows:
  - scorecard-attribute: "Lido governance has significant safeguards"
    categories: "Governance"
    self-assessment: "Needs improvement"
    comments: "Currently, the Aragon votes are two-phased. The first phase is regular vote, and the second one is time-lock with objections, during which LDO holders can only vote 'against' or change their vote from 'for' to 'against'."
  - scorecard-attribute: "There’s a robust set of Lido governance delegates"
    comments: "Lido DAO currently has vote delegation for Snapshot votes; however, the delegate set is limited and significant amount of voting power is undelegated and dormant.\\\nLido is working on improving the delegate set and educating DAO members about vote delegation."
    categories: "Governance"
    self-assessment: "Needs improvement"
  - scorecard-attribute: "Delegation is enabled in onchain Lido governance"
    categories: "Governance"
    self-assessment: "Needs improvement"
    comments: "Currently, delegation is only enabled for Snapshot votes. Lido is actively researching possible mechanics for onchain delegation."
  - scorecard-attribute: "There's a way for new operators to enter the set and prove themselves"
    categories: "Validator market"
    self-assessment: "Needs improvement"
    comments: "Lido is actively researching ways to allow permissionless operators to join its validator set, including working with SSV Network and Obol on DVT, as well as exploring ways for solo stakers to participate in the protocol."
  - scorecard-attribute: "There's a way to reduce stake to operators who do not conform to Lido standards"
    categories: "Validator market"
    self-assessment: "Needs improvement"
    comments: "Lido is working on stake (re-)allocation mechanisms based on performance and off-chain attributes, as well as developing and lobbying for solutions to allow for penalizing malicious actors (e.g.\_[triggerable exits](https://ethresear.ch/t/withdrawal-credentials-exits-based-on-a-generalized-message-bus/12516/1))."
:::