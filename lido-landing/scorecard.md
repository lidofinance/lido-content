---
title: Lido on Ethereum Scorecard
description: >
  Keep track of the latest updates on how Lido is performing against its goal of
  being decentralized, trustless, governance-minimized and ethos-aligned with
  the Ethereum community.
---
Lido DAO’s purpose is to keep Ethereum decentralized, accessible to all, and resistant to censorship.

Lido DAO’s mission is to make staking simple, secure, and decentralized.

And the endgame is a world in which Ethereum is the co-ordination and value layer of the internet.

As the protocol specification and related technologies evolve, Lido continues to drive towards its vision of a trustless, governance-minimized, and ethos aligned liquid staking protocol.

The scorecard below shows how we are doing. We invite anyone who cares to provide feedback on our [research forum]({{research_forum_url}}/).

## Where we’re already succeeding

:::scorecard-table
rows:
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
    comments: "All it takes is to switch a few bits in the governance contract to revoke\_Lido DAO’s\_current permissions and transfer them to a community-owned contract."
  - scorecard-attribute: "Withdrawal requests are automatically fulfilled"
    categories: "Validator set"
    self-assessment: "Good"
    comments: "The Lido protocol has a\_[subsystem](https://hackmd.io/@lido/SyaJQsZoj)\_which can execute withdrawals with no human participation (apart from requiring Node Operators to top up pre-signed exit messages). This subsystem ensures withdrawal requests can’t be cancelled (within a bounded period of time) and is designed to work even during chaotic\_[tail-risk scenarios](https://hackmd.io/@lido/SyaJQsZoj#How-slashings-would-affect-withdrawal-request-fulfillment)."
  - scorecard-attribute: "Withdrawal credentials are non-custodial and trustless"
    categories: "Security"
    self-assessment: "Good"
    comments: "[All](https://twitter.com/LidoFinance/status/1646977448410480643)\_Lido on Ethereum validators are now using 0x01 (smart contract) withdrawal credentials."
:::

## Where we’re doing well, but can improve

:::scorecard-table
rows:
  - scorecard-attribute: "No operator has more than 1% of total stake"
    categories: "Validator set"
    self-assessment: "Okay"
    comments: "Most operators have slightly more than 1% of total ETH staked. No operator has more than 1.2% of total ETH staked."
  - scorecard-attribute: "Distributed geographically and jurisdictionally"
    categories: "Validator set"
    self-assessment: "Okay"
    comments: "25% of validators are currently with US-based Node Operators, and there remains an over-reliance on European based entities. The DAO needs to be better at selecting Node Operators that are geopolitically diverse as it continues to expand the curated set. The\_[latest stats can be found here]({{research_forum_url}}/t/lido-node-operator-validator-metrics/1431/22)."
  - scorecard-attribute: "Distributed variation of on-premise infra and cloud providers"
    categories: "Validator set"
    self-assessment: "Okay"
    comments: "Lido has made important strides here, but there are still too many operators relying on public cloud servers (40-45% of stake)."
  - scorecard-attribute: "Best practices in security and key management"
    categories: "Validator set"
    self-assessment: "Okay"
    comments: "Keys are managed by professional node operators but distributed validator technology has not yet been introduced to Lido. Threshold based validation would be more robust, but remains work in progress and an active research focus."
  - scorecard-attribute: "Client Diversity"
    categories: "Validator set"
    self-assessment: "Okay"
    comments: "There is no dominant Consensus layer client. However the share of smaller clients can and should be higher.\n\nAdditionally, more work needs to be done to diversify clients at the Execution Layer."
  - scorecard-attribute: "Lido’s smart contracts have the best security possible"
    categories: "Security"
    self-assessment: "Okay"
    comments: "Thorough and multiple audits are undertaken on all smart contract upgrades, but no formal verification or symbolic execution based tests."
  - scorecard-attribute: "Node operators are disincentivized from acting maliciously"
    categories: "Validator set"
    self-assessment: "Okay"
    comments: "Currently, if Node Operators don’t process exits on time (in other words, try to block users from obtaining their withdrawn ETH), they suffer penalties (automatically enforced by the protocol, as well as reputational).\n\n[Triggerable execution layer exits](https://ethereum-magicians.org/t/eip-7002-execution-layer-triggerable-exits/14195), expected in Q2 2024, will keep Node Operators even more accountable to the Lido DAO (since exiting validators will be possible via a DAO vote)."
  - scorecard-attribute: "Lido DAO can’t suddenly change the validator set"
    categories: "Validator set"
    self-assessment: "Okay"
    comments: "As it stands, LDO holders cannot force Node operators to exit.\n\nEven if triggerable exits were live today, it would still take the DAO half a year, at a minimum, to rotate all validators (due to the mechanics of how the staking queue works).\n\nAdditionally, in order to create additional checks and balances on Lido governance, a\_[dual governance]({{research_forum_url}}/t/ldo-steth-dual-governance-continuation/5727)\_system, which gives stETH holders veto powers over any decision that would change the validator set, is expected to go live by end of Q3 2024."
:::

## Needs Improvement

These attributes clearly need work and Lido is actively working on solutions and improvements. We welcome input from the DAO, our partners and the wider community as we seek solutions

:::scorecard-table
rows:
  - scorecard-attribute: "Lido governance has significant safeguards"
    categories: "Governance"
    self-assessment: "Needs improvement"
    comments: "Currently, the Aragon votes are two-phased. The first phase is regular vote, and the second one is time-lock with objections, during which LDO holders can only vote ‘against’ or change their vote from ‘for’ to ‘against’.\n\nCurrently, operators do act as a check on LDO power since they cannot be force exited. Dual governance will add an additional check on power."
  - scorecard-attribute: "There’s a robust set of Lido governance delegates"
    comments: "Lido DAO currently has vote delegation for Snapshot votes; however, the delegate set is limited and significant amount of voting power is undelegated and dormant.\n\nLido contributors are currently conducting research on what a good delegate framework looks like. This will likely launch sometime in 2024."
    categories: "Governance"
    self-assessment: "Needs improvement"
  - scorecard-attribute: "Delegation is enabled in onchain Lido governance"
    categories: "Governance"
    self-assessment: "Needs improvement"
    comments: "Currently, delegation is only enabled for Snapshot votes. Lido is actively researching possible mechanics for onchain delegation."
  - scorecard-attribute: "There is a way for stakers to resist malicious governance capture"
    categories: "Governance"
    self-assessment: "Needs improvement"
    comments: "Lido on Ethereum is controlled by LDO token voting. This includes the Lido treasury, staking withdrawal keys, node operator and oracle lists, and more. As such, the voting app effectively has root access to Lido.\n\n[Research are underway]({{research_forum_url}}/t/ldo-steth-dual-governance-continuation/5727) to enable stakers to block the execution of harmful governance decisions and exit the protocol if an agreement cannot be reached."
  - scorecard-attribute: "There’s a way for operators to permissionlessly enter the set and prove themselves"
    categories: "Validator set"
    self-assessment: "Needs improvement"
    comments: "Lido V2’s\_[Staking Router]({{blog_url}}/introducing-lido-v2/#overview)\_is a controller contract which paves the way for permissionless operators to join Lido’s validator set.\n\nCurrently at the\_[policy discussion]({{research_forum_url}}/t/staking-router-modules-support-policy/4495)\_stage, the first modules are expected to go live by end of year."
:::