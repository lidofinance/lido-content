---
sections:
  - id: introduction
    title: Introduction
    body: |-
      Lido DAO is governed by **LDO holders** through a regular process that relies on established frameworks and voting platforms approved by the community — and is safeguarded by **stETH holders** through [the Dual Governance system]({{blog_url}}/dual-governance-101-explainer/).
  - id: transparency
    title: Transparency
    body: |-
      Contributors to the Lido DAO conduct goal setting publicly through **the Guided Open Objective Setting Exercise (GOOSE)**, with discussions [on the Research Forum]({{research_url}}/t/hasus-goose-2-submission-a-product-line-approach-to-grow-lido-s-staking-ecosystem/8841) and final decisions made [through off-chain voting](https://snapshot.box/#/s:lido-snapshot.eth/proposal/0xeedef9fea3d782f192410768cabaf6974da40ef36e1d22c7f8fff5fd4cfc7a59).

      Ecosystem performance and financial health metrics are reported daily [in Dune dashboards](https://dune.com/discover/content/relevant?q=author:lido&resource-type=dashboards).

      Progress updates on Lido community's goals of decentralization, trustless operation, and Ethereum-aligned governance are available [on the Scorecard page](/scorecard).
  - id: regular-process
    title: Regular process
    segments:
      - id: discussion
        title: Discussion
        body: |-
          The first step is publishing an idea, proposal, or [grant request](/lego) on the Research forum and gathering community feedback.

          There must be at least 7 days between the initial post and the next steps. It could move forward once the proposal is welcomed and feedback is addressed.
        cta:
          label: Research forum
          href: "{{research_url}}"
      - id: off-chain-voting
        title: Off-chain voting
        body: |-
          The next step is off-chain voting on Snapshot. Proposers can post [on the Lido Snapshot](https://snapshot.box/#/s:lido-snapshot.eth) themselves or request support from [the DAO Ops]({{research_url}}/new-message?groupname=DAO_Ops).

          To create a proposal on the Lido DAO Snapshot, users need at least 1,000 LDO tokens — a minimum threshold that deters spam proposals. Users without sufficient LDO can [request DAO Ops]({{research_url}}/new-message?groupname=DAO_Ops) to create a proposal on their behalf.

          **To pass**, a proposal requires the winning option to receive both a minimum of 5% of total LDO token supply and a simple majority of all participating tokens.

          For the DAO's decisions that don't require any on-chain actions, a successful off-chain vote is the final step. Other proposals proceed to on-chain voting.
        cta:
          label: Snapshot
          href: "https://snapshot.box/#/s:lido-snapshot.eth"
        note: |-
          **Snapshot voting cadence:** Snapshot voting takes place once a month. New proposals are collected and launched together, usually on Monday. The voting duration is 7 days. You can find upcoming voting slots [on the calendar](https://calendar.google.com/calendar/u/0/r?cid=Y181MjgzNDBhYzc4M2UxNWEzNDk0NTIxZDVjOGM5MDAwMTE2OGM5MWIyNDA5MGZkZTk2MDRmYzM2N2VmYTZhMWY1QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20).
      - id: on-chain-voting
        title: On-chain voting
        body: |-
          After the off-chain vote, the proposal moves to the on-chain one.

          The Lido DAO uses the Aragon framework for on-chain governance. It can perform different operations, including smart contract updates and fund transfers. Snippets [from this repo](https://github.com/lidofinance/scripts) can be used to prepare and start a vote.

          **To pass**, a proposal requires the "yes" option to receive both a minimum of 5% of total LDO token supply and a simple majority of all participating tokens.

          If neither option receives at least 5% of the total token supply in votes, no decision is made, and the proposal won't be enacted. The proposal can be rerun if there are no articulated objections.

          **To be rejected**, more than 50% of voting tokens — and at least 5% of the total token supply — must vote against the proposal.

          On-chain voting lasts 5 days and has two phases:
        phases:
          - "**The main phase:** a 3‑day (72‑hour) period of conventional voting, when participants can vote \"Yes\" or \"No\"."
          - "**The objection phase:** a 2‑day (48‑hour) period when participants can vote \"No\" or change their vote from \"Yes\" to \"No\"."
        afterPhases: |-
          To reduce operational burden and voter fatigue, if there are several passed off-chain proposals that need on-chain execution, they are usually bundled together with each item detailed separately.
        cta:
          label: On-chain votes
          href: vote
        note: |-
          **On-chain voting cadence:** On-chain votes start on Wednesdays at 14:00 UTC. You can find the closest voting slot [on the calendar](https://calendar.google.com/calendar/u/0/r?cid=Y181MjgzNDBhYzc4M2UxNWEzNDk0NTIxZDVjOGM5MDAwMTE2OGM5MWIyNDA5MGZkZTk2MDRmYzM2N2VmYTZhMWY1QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20).
      - id: dual-governance
        title: "Dual Governance: stETH holders challenge window"
        body: |-
          After passing the vote, [on-chain actions targeting Lido on Ethereum protocol](https://github.com/lidofinance/dual-governance/blob/develop/docs/mechanism.md#dual-governance-scope) enter Dual Governance — a dynamic timelock that allows stETH holders to extend execution delay based on the level of opposition.

          Each proposal faces a minimum 3-day delay, giving stETH holders time to evaluate the proposals. If stETH holders raise no objections, the proposal is scheduled and becomes available for execution in 24 hours.
  - id: delegation
    title: Delegation
    body: |-
      [Delegation](https://vote.lido.fi/delegation) allows LDO holders to designate their voting power to trusted delegates for more consistent participation in governance. This action maps the tokenholder's address to a delegate, allowing the latter to vote on the tokenholder's behalf, while LDO tokens remain fully under the tokenholder's control to be transferred, sold, or used in any way.

      Delegated votes are counted alongside direct votes and can be tracked on the voting platform. The tokenholder can override the delegate's decision or revoke delegation rights at any time.

      The Delegate program features **public delegates** — experts aligned with Lido's mission who stay current with developments and share their views publicly [on the Research forum]({{research_url}}/c/delegate-platform/22).
    cta:
      label: Delegate voting power
      href: "{{vote_url}}/delegation"
  - id: emergency-track
    title: Emergency Track
    body: |-
      In emergency cases, proposals can bypass the standard governance flow and proceed directly to on-chain voting, skipping Research forum week-long discussion and off-chain voting. A clear rationale must still be published either before or immediately after the vote begins.

      In exceptional circumstances, critical parts of the protocol can be paused through committee decision. Resuming normal operations after that requires an on-chain DAO vote.
    cta:
      label: Emergency Brakes
      href: "{{ethereum_docs_url}}/multisigs/emergency-brakes/"
  - id: veto-and-quit
    title: "Dual Governance: Veto Signaling and Rage Quit"
    body: |-
      stETH holders can signal opposition to LDO governance motions by placing their tokens into a dedicated escrow contract. Depending on the amount of stETH in opposition, the governance system enters different states.

      The main states are:
    states:
      - title: Veto Signaling
        body: |-
          **Veto Signaling** is activated with **>1% [of the total stETH supply](https://etherscan.io/token/0xae7ab96520de3a18e5e111b5eaab095312d7fe84?a=0xa49c738162a6faac74220993ad014814955a535c)** in the signaling escrow. This blocks governance motions for 5 to 45 days, depending on the amount of opposing tokens. This provides time for negotiation between LDO and stETH holders.
      - title: Rage Quit
        body: |-
          **Rage Quit** is triggered when **>10% [of the total stETH supply](https://etherscan.io/token/0xae7ab96520de3a18e5e111b5eaab095312d7fe84?a=0xa49c738162a6faac74220993ad014814955a535c)** is locked in the signaling escrow. Governance stays paused until opposing stakers exit the protocol.
    cta:
      label: Dual Governance guide
      href: "{{ethereum_docs_url}}/guides/dg-guide/"
  - id: easy-tracks
    title: Easy Track
    body: |-
      [The Easy Track]({{vote_url}}/easy-track) application provides an efficient mechanism for handling routine operations in the Lido DAO to reduce voter fatigue.

      Only authorized addresses — typically committee multisigs — can initiate Easy Track motions. Each motion passes automatically after 72 hours unless 0.5% of the total LDO supply objects.

      Examples of Easy Track motions include updating node operator parameters, adjusting staking limits, or funding grants within predefined budgets.
    cta:
      label: Easy Track
      href: "{{vote_url}}/easy-track"
---
