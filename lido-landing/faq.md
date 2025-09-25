---
categories:
  - name: Introduction
    q&a:
      - question: What is Lido?
        answer: Lido is the name of a family of open-source peer-to-system software
          tools deployed and functioning on the Ethereum blockchain network. The
          software enables users to mint transferable utility tokens, which
          receive rewards linked to the related validation activities of writing
          data to the blockchain, while the tokens can be used in other on-chain
          activities.
      - answer: The Lido protocol batches user tokens to stake with validators and
          routes the staking packages to Ethereum staking contracts. Users mint
          amounts of stETH which correspond to the amount of tokens sent as
          stake and they receive staking rewards. When they unstake, they burn
          their stETH to initiate the network-specific withdrawal process to
          withdraw the balance of stake and rewards.
        question: How does Lido work?
      - question: Why Lido?
        answer: >-
          * Lido protocol gives the user liquidity — the stTokens are on the
          execution layer, so they can be transferred. Users receive staking
          rewards from validation activities but can sell stTokens anytime they
          want to exit their staking position.

          * Participate in DeFi — users can use stTokens as building blocks in DeFi protocols at the same time as getting staking rewards from validating activities.

          * Lido protocol is governed by the Lido DAO — this means there is no central point for making decisions, and there is no one person who has access, control, or decision power to define what to do with users’ tokens. All decisions with respect to the protocol are voted up by the DAO, and all LDO holders may vote.

          * Curating the best node operator set. The protocol includes both experienced, time-proven staking service providers and permissionless bonded participants. \[OPTIONAL: In reputation-based modules, operator reliability reduces the likelihood of technical errors or slashing. In permissionless modules like the Community Staking Module, bonding and transparent exit mechanisms help ensure aligned incentives and secure performance — regardless of the operator’s prior track record.] Users supply the stake; node operators supply the know-how.
  - name: Staking
    q&a:
      - question: What is liquid staking?
        answer: Liquid staking protocols allow users to mint a transferable utility
          token that can be used in on-chain activities while their stake is
          locked-up while they continue to get staking rewards without
          maintaining any staking infrastructure. Thus it is said to be
          “liquid”.
      - question: What fee is applied by the protocol? What is it used for?
        answer: The protocol applies a 10% fee on staking rewards. This fee is split
          between Node Operators and the Lido DAO. That means the users receive
          90% of Ethereum staking rewards.
      - question: How can I get stTokens?
        answer: Lido protocol let users stake native tokens (ETH) from Ethereum network
          in a fully permissionless way. The protocols are deployed on public
          blockchains, so users do not need the website to access the smart
          contracts. However, for convenience, users can get started with
          information on [the main page](https://{{landing}}/).
      - question: Where can I use stTokens?
        answer: stTokens can be used across a growing ecosystem. [Explore apps and
          services](https://{{landing}}/lido-ecosystem) integrated with
          stTokens.
  - name: Ethereum
    q&a:
      - question: What is Lido on Ethereum?
        answer: The Lido on Ethereum is a leading liquid staking middleware solution
          specifically designed for the Ethereum network. It allows users to
          stake their ETH and mint stETH tokens in return, reflecting their
          staked ETH. This solution enables users to maintain liquidity and
          freely trade or utilize their tokens while still participating in
          staking and receiving staking rewards.
      - question: What is stETH?
        answer: stETH is a rebasing liquid staking token (LST) that serves as a
          depiction of a user's portion of the total ETH staked through the
          middleware, including both staked tokens and network rewards.
      - question: Why is stETH a rebasing token?
        answer: stETH is a rebasing token because its supply is adjusted on a daily
          basis to accurately reflect the amount of ETH staked through the Lido
          middleware and any accrued rewards and/or slashing events that might
          have occurred. To maintain transparency and ensure each user's stETH
          accurately represents their proportionate participation, a daily
          rebasing mechanism is employed.
      - question: How can I get stETH?
        answer: >-
          There are two primary methods to get stETH:


          * Stake through the Lido middleware: You can participate in staking by depositing your ETH through the [Lido middleware]({{ethereum_stake_url}}) and mint stETH in return.

          * Through exchanges: stETH can be bought, sold or exchanged for other tokens on various centralised and decentralised exchanges. For example: you can exchange other cryptocurrencies like USDC for stETH on Uniswap.
      - question: How can I use stETH?
        answer: stETH can be utilized within an expanding ecosystem of blockchains,
          enabling integrations with a wide range of [DApps and
          Services]({{landing_url}}/lido-ecosystem). By exploring these
          integrations, users can unlock the functionality and benefits of stETH
          across different protocols and applications.
      - question: How can I unstake stETH?
        answer: To unstake stETH and convert it back to ETH, you can initiate the
          process through the [Withdrawals
          tab]({{ethereum_stake_url}}/withdrawals/request). After submitting the
          withdrawal request using the [Request
          widget]({{ethereum_stake_url}}/withdrawals/request), which typically
          takes 1 to 5 days to process, you can claim your ETH at a 1:1 ratio
          using the [Claim widget]({{ethereum_stake_url}}/withdrawals/claim).
          Alternatively, you have the option to immediately exchange stETH for
          ETH on exchanges supporting the token.
      - question: How long after requesting a withdrawal can I claim my ETH?
        answer: After initiating the withdrawal process for stETH and submitting the
          request through the [Withdrawals
          tab]({{ethereum_stake_url}}/withdrawals/request), the completion time
          usually ranges from 1 to 5 days, depending on factors such as the
          withdrawal size and the existing withdrawal queue. For a more accurate
          estimate of the waiting time, enter your withdrawal request amount on
          the [Requests widget]({{ethereum_stake_url}}/withdrawals/request).
          Alternatively, you have the option to immediately exchange stETH for
          ETH on supported exchanges.
      - question: What is wstETH?
        answer: wstETH is a wrapped version of stETH that does not undergo daily
          rebases. While stETH's token balance changes daily to reflect each
          user’s portion of the staked ETH and network rewards, wstETH does not
          change and maintains the same token balance.
      - question: Why would I hold wstETH over stETH?
        answer: >-
          There are two primary reasons to hold wstETH over stETH:


          * Compatibility: Certain blockchains, DApps and Services cannot technically support rebasing tokens. In such cases, wstETH offers a suitable alternative that can be utilized within these ecosystems without encountering compatibility issues.

          * Consistent Balance: For users who prefer a consistent token balance without daily rebases, wstETH provides a viable alternative. By holding wstETH, users can participate in staking while maintaining the same token balance.
      - question: How can I get wstETH?
        answer: >-
          To acquire wstETH, you have two options:


          * Wrap stETH or ETH: You can use the [Wrap & Unwrap staking widget]({{ethereum_stake_url}}/wrap?mode=unwrap). This allows you to convert your stETH or ETH into wstETH, effectively wrapping them to obtain the non-rebasing token.

          * Get on exchanges: wstETH can be bought, sold or exchanged for other tokens on various centralised and decentralised exchanges. For example: you can exchange other cryptocurrencies like USDC for wstETH on Uniswap or other exchanges that support it.
      - question: Do I get my network rewards if I wrap stETH to wstETH?
        answer: Yes. When you wrap stETH to wstETH, you continue to be able to receive
          network rewards at the same rate as regular stETH. While holding
          wstETH, you may not see the daily staking rewards reflected in your
          token balance. However, once you decide to unwrap wstETH back into
          stETH, your stETH balance will reflect any network rewards accumulated
          during the time it was wrapped.
      - question: Do I need to claim my staking rewards if I wrap stETH to wstETH?
        answer: No, staking rewards are accumulated automatically.
      - question: How can I unwrap wstETH?
        answer: You can unwrap your wstETH tokens using [Wrap & Unwrap staking
          widget]({{ethereum_stake_url}}/wrap?mode=unwrap).
      - question: Do I need to unwrap my wstETH before requesting withdrawals?
        answer: No. It is not necessary to unwrap your wstETH before requesting
          withdrawals. You can directly initiate the withdrawal process using
          the [Withdrawals Request and Claim
          tabs]({{ethereum_stake_url}}/withdrawals/request). It is important to
          note that during the withdrawal process, wstETH will be unwrapped to
          stETH as part of the underlying mechanism, allowing for a smooth
          unwrapping and unstaking directly into ETH.
      - question: What is the difference between ETH, stETH, and wstETH?
        answer: >-
          * ETH is the native token of the Ethereum network.

          * stETH is a rebasing liquid staking token (LST) that serves as a depiction of a user's portion of the total ETH staked through the middleware and any accrued rewards and/or slashing events that might have occurred.

          * wstETH is a wrapped version of stETH that does not undergo daily rebases. While stETH's token balance changes daily to reflect each user’s portion of the staked ETH and any network rewards or slashing events that might have occurred, wstETH maintains a constant token balance.
      - question: How are the projected annual network rewards on Ethereum calculated?
        answer: >-
          Network rewards accumulated through usage of the middleware for
          Ethereum = total amount of those network rewards* (1 - Protocol Fee)


          * Total amount of network rewards accumulated through usage of the middleware  The overall Consensus Layer (CL) and Execution Layer (EL) rewards received by validators utilizing the Lido middleware to total pooled ETH estimated as the moving average of the last seven frames (approximately 7 days) after protocol fee.

          * Protocol Fee: A 10% fee on staking rewards that is split equally between Node Operators and Lido DAO.


          For more detailed information you can refer to the [Lido Docs]({{ethereum_docs_url}}).
      - question: What is Lido Multichain?
        answer: Lido Multichain lets users bridge their wstETH to a number of unique
          networks including Arbitrum, Optimism, zkSync, BNB Chain and many
          more. By doing so, users can benefit from lower gas fees and unique
          DeFi opportunities across these ecosystems while continuing to benefit
          from the staking rewards of wstETH.
      - question: What is the Slashing CoverageFund used for?
        answer: The fund is a smart contract that holds stETH and is designed to address
          slashing risks related to the Lido middleware participants. It serves
          as a reserve that could potentially mitigate losses incurred by
          validators who violate network rules. If a widespread slashing
          incident occurs, the Lido DAO members vote to determine whether to use
          the fund to recover some of the losses.
      - question: Where can I cover my stETH?
        answer: >-
          There are multiple coverage providers with different products for
          stETH:


          * [Bridge Mutual](https://bridgemutual.io/)

          * [Idle Finance](https://idle.finance/)

          * [Ribbon Finance](https://app.ribbon.finance/)

          * [Chainproof](https://www.chainproof.co/)


          Check with providers for coverage and conditions.
  - name: Lido Multichain
    q&a:
      - question: What is Lido Multichain?
        answer: "[Lido Multichain](https://{{landing}}/lido-multichain) extends the use
          of your staked tokens across chains other than Ethereum. By bridging
          to other chains, stakers can benefit from lower fees, faster speeds
          and unique DeFi options."
      - question: Which chains are supported within Lido Multichain?
        answer: All supported chains for stETH and wstETH are listed
          [here]({{landing_url}}/lido-multichain).
      - question: What tokens are supported on Lido Multichain?
        answer: "[stETH](https://{{help}}/en/articles/5230610-what-is-steth) and its
          wrapped
          version, [wstETH](https://{{help}}/en/articles/5231836-what-is-lido-s\
          -wsteth), are supported on Lido Multichain."
      - question: What is the difference between stETH and wstETH?
        answer: >-
          * stETH is a rebasing liquid staking token (LST) that serves as a
          depiction of a user's portion of the total ETH staked through the
          middleware and any accrued rewards and/or slashing events that might
          have occurred.

          * wstETH is a wrapped version of stETH that does not undergo daily rebases. While stETH's token balance changes daily to reflect each user’s portion of the staked ETH and any network rewards or slashing events that might have occurred, wstETH maintains a constant token balance.
      - question: Do I still receive rewards on my tokens on other chains?
        answer: Yes. When using stETH or wstETH on other chains separate from Ethereum
          you continue getting staking rewards as normal. Rewards are realized
          when you unwrap or swap wstETH back to stETH or ETH.
      - question: Can I stake directly on other chains?
        answer: Direct staking on other chains is not possible yet, but you can get
          stETH or wstETH
          from [DEXes](https://{{landing}}/lido-ecosystem?tokens=wsteth&criteria=and&categories=get) directly
          on other chains.
      - question: How can I bridge stETH or wstETH to other chains?
        answer: Lido users can bridge stETH and wstETH to supported chains using the
          provided [bridging
          guides](https://{{help}}/en/collections/3641672-lido-on-layer-2-l2).
          Also, there are [options for swapping and
          exchanging](https://{{landing}}/lido-ecosystem?tokens=wsteth&criteria=and&categories=get) tokens
          on other chains.
      - question: What DeFi apps are supported on other chains?
        answer: The various chains and DeFi apps that support Lido’s tokens can be found
          on the [Lido Multichain page](https://{{landing}}/lido-multichain).
      - question: Can I bridge stETH and wstETH from other chains back to Ethereum?
        answer: Yes, by using canonical bridges or by using the swap options.
      - question: Can I bridge stETH or wstETH between different chains?
        answer: You can bridge from different chains using canonical bridges or using
          3rd party cross-chain bridges like
          [portalbridge.com](https://portalbridge.com/).
      - question: Can I wrap/unwrap my stETH to wstETH on directly Optimism?
        answer: Yes, you can use the [Wrap & Unwrap staking
          widget]({{ethereum_stake_url}}/wrap/unwrap) on Optimism.
      - question: Are there any risks associated with using Lido’s tokens on other
          chains?
        answer: There are a number of risks associated with interacting with new chains
          and DeFi protocols. Make sure to read up on the various bridges,
          networks and applications prior to bridging.
      - question: How can I verify the accuracy of the bridged token address?
        answer: You can check the address with [Lido Multichain Deployed
          Contracts](https://{{ethereum_docs}}/deployed-contracts/#lido-multichain).
      - question: Where can I find support or get assistance with Lido Multichain?
        answer: Stop by the [Lido Discord](https://discord.com/invite/lido) or [Telegram
          chat](https://t.me/lidofinance) in case of any questions.
  - name: Lido DAO
    q&a:
      - question: What is DAO?
        answer: DAO is a decentralized autonomous organization, a bottom-up entity
          structure without a central authority. Members of a DAO own governance
          tokens of the DAO, and members have the ability to vote on initiatives
          and decisions of the entity with the token.
      - question: Why are Lido protocols governed by a DAO?
        answer: >-
          * The DAO organization enables a focus on community and might offer a
          more socially-conscious structure and consequent decision-making than
          conventional arrangements.

          * The DAO organization will be able to cover the costs of proper maintenance and upgrading of the protocols from the DAO token treasury.

          * Liquid staking as a product is especially sensitive to being in tune with the community, and where Lido can't have governance minimized protocol, it is beneficial to have community-aligned governance.
      - question: How does the Lido governance process work?
        answer: >-
          Decisions made by the Lido DAO may have on-chain results: either
          immediate transactions or transactions to be made in the future. To
          make sure that those decisions are well-informed, as well as properly
          communicated with the wider community, the governance process in Lido
          consists of multiple steps.


          [Learn more](https://{{landing}}/governance)
      - question: What is LDO?
        answer: LDO is an ERC20 token that gives the ability to participate in the
          governance process of the Lido DAO. The Lido DAO decides on some key
          parameters of the liquid staking protocols through the voting power of
          governance token (LDO). By holding the LDO token, one has the ability
          to vote within the Lido DAO.
  - name: Node operators
    q&a:
      - question: Who are Node Operators running validators through the Lido protocol?
        answer: >-
          The Node Operators (NOs) are a collective of professional staking
          service providers, community staking groups, home stakers, and other
          staking organizations that run validators through the Lido protocol. 



          The better the underlying operator set is, the more robust, resilient, and performing the protocol will be. Selecting a good operator set aims to increase community acceptance and reduce protocol risks.


          [Learn more](https://{{operatorportal}}/).
      - question: How to become a Node Operator within the Lido protocol?
        answer: You could explore the requirements to become a Node Operator on
          the [Node Operator
          Portal](https://{{operatorportal}}/apply-to-be-a-lido-node-operator).
  - name: Security
    q&a:
      - question: Is it safe to work with Lido DAO?
        answer: >-
          In order to provide users with a safe staking platform, the Lido
          protocol fits the next points:


          * Open-sourcing & continuous review of all code.

          * Committee of elected, best-in-class and bonded operators to minimise staking risk. Usually, when staking ETH, you choose only one operator. In the case of the Lido protocol, you stake across many operators.

          * Use of non-custodial staking service to eliminate counterparty risk.

          * Use of DAO for governance decisions & to manage risk factors.

          * The Lido protocol has been audited by Certora, StateMind, Hexens, ChainSecurity, Oxorio, MixBytes, SigmaPrime, Quantstamp. Lido audits can be found in more detail [here](https://github.com/lidofinance/audits)



          Please note that despite these measures, potential risks still apply. The FAQs below provide additional insights into the risks associated with staking via Lido. For further information and details, please visit the [Terms of Use](https://{{landing}}/terms-of-use).
      - question: What are the risks of staking with Lido?
        answer: >-
          There are some potential risks when staking using the Lido protocol.
          Such risks may encompass, among others:


          * **Smart contract security**
            There is an inherent risk that the Lido protocol could contain a smart contract vulnerability or bug. To minimise this risk, the Lido code is open-sourced, audited, and covered by a robust [Immunify bug bounty program](https://immunefi.com/bounty/lido/). In addition, all core Lido contracts are audited to mitigate smart contract risks. Audit reports can be found [here](https://github.com/lidofinance/audits).
          * **Slashing risk**
            Validators risk staking penalties, with up to 100% of staked funds at risk if they fail. To minimise this risk, the Lido protocol distributes stake across the bondless reputation-based and bonded permissionless Node Operators with heterogeneous setups, while adding an extra layer of protection in the form of [6,341 stETH self-coverage Lido DAO fund](https://etherscan.io/address/0x8B3f33234ABD88493c0Cd28De33D583B70beDe35).
          * stETH price risk
            Users risk an exchange price of stETH which is lower than inherent value due to withdrawal restrictions on the Lido protocol, making arbitrage and risk-free market-making impossible.

          For further information and details about these and other potential risks, please read carefully the [Terms of Use](https://{{landing}}/terms-of-use).


          Always conduct your own research and consult your professional advisors to understand all potential risks before participating.
      - question: Have the protocols been audited?
        answer: Lido DAO codebase has been audited by industry leaders in blockchain
          security. You can find the list of
          audits [here](https://github.com/lidofinance/audits) with code review
          reports.
      - question: Does Lido DAO have a Bug Bounty program?
        answer: Lido DAO uses the [Immunefi platform](https://immunefi.com/) — the
          leading bug bounty platform for DeFi with the world's largest
          bounties. All info about Lido Bug Bounty programs
          is [here](https://{{landing}}/bug-bounty).
  - name: Additional
    q&a:
      - question: Where can I find more info for developers?
        answer: "* [Lido on
          Ethereum](https://{{ethereum_docs}}/guides/steth-integration-guide)"
      - question: Where can I get info about Lido integrations?
        answer: All info about Lido integrations you can find in [Help
          Center](https://{{help}}/en/) or on the [Lido Ecosystem
          page](https://{{landing}}/lido-ecosystem).
      - question: Where can I go to join Lido DAO’s community?
        answer: >-
          * Follow on [X](https://x.com/lidofinance).

          * Join [Telegram](https://t.me/lidofinance).

          * Ask questions in [Discord](https://discord.com/invite/lido).

          * Learn about Lido on [Blog](https://{{blog}}/).

          * Contribute to the codebase in [GitHub](https://github.com/lidofinance).

          * Stay updated through the [Research forum](https://{{research}}/).
      - question: Who is eligible for LEGO funding?
        answer: Any blockchain developer, crypto enthusiast, or member of the community
          can be a participant in Lido Ecosystem Grants Organization. If you're
          improving the ecosystem or creating general awareness about Ethereum,
          PoS, and DeFi and have a solid plan on how to meet your goals, [here
          is the info](https://{{landing}}/lego) for you.
---
