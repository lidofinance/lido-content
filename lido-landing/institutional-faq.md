---
categories:
  - name: Institutional FAQ
    q&a:
      - id: institutional-crypto-staking
        question: What is institutional crypto staking?
        answer: >-
          Institutional staking is how funds, companies, and treasuries help secure proof-of-stake networks and earn protocol rewards. The Lido Protocol provides **non-custodial liquid staking** for Ethereum, issuing **stETH** that reflects your staked position and accrued rewards with on-chain transparency.
      - id: eth-staking-how-it-works
        question: What is institutional Ethereum (ETH) staking and how does it work?
        answer: >-
          ETH is staked to validators that help secure the Ethereum network. With the Lido Protocol, deposits are pooled and distributed across a diversified validator set; you receive **stETH**, an ERC-20 rebasing token representing your stake and rewards. Rewards accrue on-chain and are reflected in your stETH balance.
      - id: eth-staking-vs-retail
        question: How is institutional ETH staking different from retail?
        answer: >-
          Institutions typically require stricter governance and operational controls. Liquid staking via **stETH** can slot into existing wallet/custody workflows and treasury processes while providing on-chain transparency and optional liquidity management. The Lido protocol maintains native integrations with leading institutional services providers including [Fireblocks]({{blog_url}}/leverage-steth-on-fireblocks-off-exchange/), [Copper]({{blog_url}}/lido-brings-liquid-staking-to-coppers-clearloop/), and [BitGo]({{blog_url}}/bitgo-becomes-first-us-custodian-to-enable-native-eth-staking-via-lido/).
      - id: liquid-staking-vs-inhouse-validators
        question: What is the main difference between liquid staking (stETH) and running validators in-house?
        answer: >-
          Operating validators in-house requires capital, infrastructure and client management, monitoring, incident response, and ongoing maintenance. Liquid staking offloads validator operations to a distributed set while **preserving liquidity** via stETH.
      - id: institutional-staking-risks
        question: What are the main risks for institutions (smart contract, validator, market, liquidity)?
        answer: |-
          The Lido protocol was launched in 2020 and since then, it has been running without major security incidents, while facilitating ~30% of all ETH staking.

          However, there exist a number of potential risks when staking using the Lido protocol. Some of these risks include:

          * Smart contract security  
            There is an inherent risk that the Lido protocol could contain a smart contract vulnerability or bug. The Lido code is open-sourced, audited, and covered by an extensive Immunefi bug bounty program to minimize this risk. To mitigate smart contract risks, all of the core Lido contracts are audited. Audit reports can be found here.
          * Slashing risk  
            Validators risk staking penalties, with up to 100% of staked funds at risk if validators fail. To minimize this risk, the Lido protocol provides a staking platform across multiple professional and reputable node operators with heterogeneous setups, with additional mitigation in the form of self-coverage.
          * stETH price risk  
            Users risk an exchange price of stETH, which is lower than the inherent value due to withdrawal restrictions on the Lido protocol, making arbitrage and risk-free market-making impossible.

          For further information and details about these and other potential risks, please read carefully the [Terms of Use](/terms-of-use), and the [Lido FAQ](/faq).

          Participants should always conduct their own research and consult their own professional advisors to understand all potential risks before participating
      - id: validator-performance-slashing
        question: How does the Lido protocol address validator performance and slashing risk?
        answer: >-
          Stake is distributed via the Staking Router across modules (Curated, Simple DVT, CSM) and diverse operators. DVT clusters improve fault tolerance; the Deposit Security Module (DSM) protects deposit flows; and on-chain oracles/monitoring support daily accounting. This design aims to reduce correlated risks and support high validator performance over time.
      - id: validator-client-diversity
        question: How does the Lido  protocol promote validator/client and geographic diversity?
        answer: >-
          Lido protocol's multi-module roadmap (e.g., Curated Module, Simple DVT, Community Staking) and operator onboarding processes are designed to improve client, infrastructure, and geographic diversity over time. Institutions can track validator distribution and changes through the [Validator & Node metrics dashboard](https://app.hex.tech/8dedcd99-17f4-49d8-944e-4857a355b90a/app/VaNOM-Lido-on-Ethereum-Validator-Node-metrics-1vnpSDa7PtbyA6HX0bVNj1/latest?ref={{blog}}).
      - id: staking-provider-criteria
        question: What do institutions usually look for in an ETH staking provider?
        answer: >-
          Prioritize audited contracts and transparent security, validator-set diversity and performance, slashing mitigation, a clear redemption path, compatibility with custody/workflows (policy controls, whitelists, approvals). Validate these items against your internal risk and procurement checklists.
      - id: aml-kyc-compliance
        question: How can a regulated bank participate in the Lido protocol while remaining compliant with international and local AML and KYC regulations?
        answer: |-
          The Lido Protocol is open-source software and is not considered an obligated entity required to conduct KYC/AML checks. The technical design of this specific liquid staking solution is purely non-custodial on the level of node operators and self-managed for users.

          KYC/AML checks are conducted by counterparties that provide services around stETH. Depending on the specific service, the KYC/AML requirements around stETH might differ. Financial institutions that offer custody or brokerage on stETH conduct KYC/AML checks on their clients and incoming funds.
      - id: rewards-and-fees
        question: How are rewards and fees handled?
        answer: >-
          Rewards are reflected via a daily stETH rebase based on validator performance reported by Lido's oracles. Rewards come from both the Consensus Layer and Execution Layer. A protocol fee applies only when net rewards are positive and is allocated between Node Operators and the Lido DAO (module-specific splits). Review the current fee policy in the docs before making decisions.
      - id: certifications-and-ratings
        question: What certifications and ratings does Lido have?
        answer: >-
          [Lido DAO has received Web3SOC certification](https://cantina.xyz/u/lidofinance/web3soc), demonstrating governance, finance, security, and compliance readiness for institutions. Additionally, stETH holds an A+ rating in both Staking Rewards' risk framework and Credora's DeFi ratings framework.
      - id: web3soc-overview
        question: What is Web3SOC and how does it work?
        answer: >-
          [Web3SOC](https://cantina.xyz/web3soc) is a standardized classification system that evaluates DeFi organizations across four core areas: operational (team structure and governance), financial (economic design and capital resilience), security (smart contract and infrastructure robustness), and regulatory (legal compliance).
      - id: web3soc-vs-soc2-iso27001
        question: What is the difference between Web3SOC and SOC 2 or ISO 27001 and why does the DAO have Web3SOC instead of those?
        answer: >-
          Web3SOC follows a point-in-time assessment model and shares structural principles with traditional frameworks such as SOC 2 and ISO 27001. However, it was purpose-built for decentralized finance — covering smart contract security, key management, validator operations, and on-chain governance, which traditional certifications were not designed to assess.
      - id: web3soc-due-diligence
        question: How can institutions use Web3SOC for DeFi due diligence?
        answer: >-
          Institutions can incorporate Web3SOC into their investment evaluation process to assess DeFi organizations with the same rigor as they would a traditional organization. Institutions can access full certification report on request to [Cantina](https://cantina.xyz/u/lidofinance/web3soc).
---
