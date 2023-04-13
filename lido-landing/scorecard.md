---
title: Lido on Ethereum Scorecard
description: >+
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
  - scorecard-attribute: Legally and physically unrelated
    categories: Validator set
    self-assessment: Good
  - scorecard-attribute: Operators run their own nodes (no white-labeling)
    categories: Validator set
    self-assessment: Good
  - scorecard-attribute: Good performance
    categories: Validator set
    self-assessment: Good
  - scorecard-attribute: >-
      Operators should earn well enough to build a profitable, dependable
      business on staking
    categories: Validator set
    self-assessment: Good
  - scorecard-attribute: Lido’s hostile takeover via a hard fork is possible
    categories: Security
    self-assessment: Good
    comments: "As discussed in our\_[The Next Chapter for Lido](https://blog.lido.fi/the-next-chapter-for-lido/)\_article, as a very last resort (in the case of governance capture) we have made it trivial for Ethereum core developers to revoke Lido’s current permissions and transfer them to a community-owned contract."
  - scorecard-attribute: Lido can’t change validator set at will
    categories: Governance
    self-assessment: Good
    comments: >-
      Lido currently only has soft power over its Node Operators. Withdrawals
      and triggerable exits will change this balance, but at the same time
      permissionless elements will be added to the validator set.
:::

## Where we’re doing well, but can improve

These attributes are more of a grey area with identified areas for improvement noted in the comments.

:::scorecard-table
rows:
  - scorecard-attribute: No operators with over 1% of total stake of Ethereum through Lido
    categories: Validator set
    self-assessment: Okay
    comments: A few operators between 1% and 2%
  - scorecard-attribute: Distributed geographically and jurisdictionally
    categories: Validator set
    self-assessment: Okay
    comments: >-
      While ~10% of validators are currently with US-based Node Operators, there
      remains an over-reliance on European based entities. Lido will continue to
      select Node Operators in the interest of jurisdictional and geographic
      diversity as it expands the set and will publish this information
      transparently going forward
  - scorecard-attribute: Distributed variation of on-premise infra and different cloud providers
    categories: Validator set
    self-assessment: Okay
    comments: Not enough on-premise infra setups
  - scorecard-attribute: Best practices in security and key management
    categories: Validator set
    self-assessment: Okay
    comments: >-
      Keys are managed by professional node operators but distributed validator
      technology has not yet been introduced to Lido. Threshold based validation
      would be more robust, but remains work in progress and an active research
      focus.
  - scorecard-attribute: Client Diversity
    categories: Validator set
    self-assessment: Okay
    comments: >-
      Prysm is not the dominant client in Lido (>58% minority client usage), but
      share of smaller clients could be higher.


      Additionally, more work to be done on Execution Layer client
      diversification.
  - scorecard-attribute: Lido’s smart contracts have the best security possible
    categories: Security
    self-assessment: Okay
    comments: >-
      Thorough and multiple audits are undertaken on all smart contract
      upgrades, but no formal verification or symbolic execution based tests
  - scorecard-attribute: Withdrawals are non-custodial and trustless
    categories: Security
    self-assessment: Okay
    comments: "Lido validators until July 2021 were created with threshold signature BLS withdrawal credentials; as of\_[July 2021, Lido validators are on smart contract withdrawal credentials](https://blog.lido.fi/withdrawal-credentials-in-lido/). The percentage of all Lido validators with\_[threshold BLS withdrawal credentials is ~15%](https://dune.com/queries/96764/193960)\_and steadily decreasing as new validators are added.\n\nLido intends on rotating these validators to 0x01 (smart contract) withdrawal credentials as soon as possible, i.e. with the\_[Capella Hardfork](https://github.com/ethereum/consensus-specs/blob/dev/specs/capella/beacon-chain.md).\n\nThe current Lido withdrawal smart contract is a stub, and will be upgraded to a fully-functioning withdrawal contract once the withdrawal specs are finalized."
:::

## Needs Improvement

These attributes clearly need work and Lido is actively working on solutions and improvements. We welcome input from the DAO, our partners and the wider community as we seek solutions

:::scorecard-table
rows:
  - scorecard-attribute: Lido governance has significant safeguards
    categories: Governance
    self-assessment: Needs improvement
    comments: >-
      Currently, the Aragon votes are two-phased. The first phase is regular
      vote, and the second one is time-lock with objections, during which LDO
      holders can only vote 'against' or change their vote from 'for' to
      'against'.
  - scorecard-attribute: There’s a robust set of Lido governance delegates
    comments: >-
      Lido DAO currently has vote delegation for Snapshot votes; however, the
      delegate set is limited and significant amount of voting power is
      undelegated and dormant.\

      Lido is working on improving the delegate set and educating DAO members
      about vote delegation.
    categories: Governance
    self-assessment: Needs improvement
  - scorecard-attribute: Delegation is enabled in onchain Lido governance
    categories: Governance
    self-assessment: Needs improvement
    comments: >-
      Currently, delegation is only enabled for Snapshot votes. Lido is actively
      researching possible mechanics for onchain delegation.
  - scorecard-attribute: There is a way for stakers to resist malicious governance capture
    categories: Governance
    self-assessment: Needs improvement
    comments: "Presently, Lido on Ethereum is controlled by LDO token voting via an Aragon DAO. This includes the Lido treasury, staking withdrawal keys, node and oracle operator lists, DAO Access Control List (ACL) permissions, the execution of EVM scripts, and more. As such, the voting app is effectively\_[root access](https://medium.com/block-science/dao-vulnerabilities-a-map-of-lido-governance-risks-opportunities-92bc6384ff68)\_to Lido.\n\nIn order to reduce the power LDO holders have over the protocol, when faced with a\_[critical governance decision](https://hackmd.io/@lido/BJKmFkM-i#Critical-governance-decisions)\_that could negatively impact stakers, stakers should be able to block Lido governance from executing the decision, and exit the protocol if an agreement cannot be reached."
  - scorecard-attribute: There's a way for new operators to enter the set and prove themselves
    categories: Validator market
    self-assessment: Needs improvement
    comments: >-
      Lido is actively researching ways to allow permissionless operators to
      join its validator set, including working with SSV Network and Obol on
      DVT, as well as exploring ways for solo stakers to participate in the
      protocol.
  - scorecard-attribute: >-
      There's a way to reduce stake to operators who do not conform to Lido
      standards
    categories: Validator market
    self-assessment: Needs improvement
    comments: "Lido is working on stake (re-)allocation mechanisms based on performance and off-chain attributes, as well as developing and lobbying for solutions to allow for penalizing malicious actors (e.g.\_[triggerable exits](https://ethresear.ch/t/withdrawal-credentials-exits-based-on-a-generalized-message-bus/12516/1))."
:::