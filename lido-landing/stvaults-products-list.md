---
sections:
  - title: Public staking vaults
    description: "Permissionless staking vaults open to any user, from straightforward ETH staking and liquid staking via stETH, to vaults that layer additional rewards-generating strategies on top for higher potential returns"
    products:
      - id: "1"
        slug: rocksolid-autoplus-stvault
        title: RockSolid AutoPlus Looped ETH Vault
        description: "Introducing the RockSolid AutoPlus Looped ETH Vault – a breakthrough in institutional ETH staking. Enjoy flexible liquidity access, robust security, and transparent onchain performance, all designed to meet evolving institutional demands while keeping risk management at the forefront. Staking managed by Pier Two, a world-class staking infrastructure company with multi-zonal 24/7 operations, high-performance hybrid cloud and bare metal infrastructure. Operated by RockSolid, the RockSolid AutoPlus Looped ETH Vault is an institutional-grade liquid vault platform that delivers integrated on-chain yield products, managed by professional DeFi strategies. The vault deploys a blue-chip leveraged staking strategy that uses conservative levels of leverage with the goal of generating roughly 2x the native staking rate."
        metaImage: rocksolid-autoplus-stvault.png
        link: "https://app.rocksolid.network/vaults/0x7a12d4b719f5aa479ecd60defed909fb2a37e428"
        addresses:
          - "0x62e0D92cf7B8752b5292B9BCbbacE4cFa1633428"
        builder:
          logo: /static/stvaults-products-overview/product/curator-or-owner/rock-solid.svg
          name: RockSolid
          contactLink: "mailto:ben@rocksolid.network"
        nodeOperator:
          logo: /static/stvaults-products-overview/product/node-operator/pier-two.svg
          name: Pier Two
          contactLink: "mailto:jake@piertwo.com"
        curator:
          logo: /static/stvaults-products-overview/product/tulipa.svg
          name: Tulipa
          contactLink: "https://www.tulipa.capital/"
        blogPost:
          image: "{{blog_url}}/content/images/size/w1000/2026/02/Lido-V3---Pier-Two---RockSolid-post.png"
          title: "Lido V3 & Pier Two x RockSolid: Expanding Institutional Ethereum Staking with stVaults"
          description: "Learn how Lido, PierTwo and RockSolid meet institutional demand for Ethereum staking with the RockSolid AutoPlus Looped ETH Vault"
          link: "{{blog_url}}/lido-v3-pier-two-x-rocksolid-expanding-institutional-ethereum-staking-with-stvaults/"
        isDefiWrapper: false
        isDvtCluster: false
      - id: "4"
        slug: prodelegators-ethereum-staking
        title: Ethereum Staking
        description: "The Classic Pool offers users the most straightforward way to stake their Ethereum and earn staking rewards without the technical burden of running a validator node. While their funds remain staked to secure the network, users retain full control: they can request to withdraw their ETH at any time. Please note that due to Ethereum's network security protocols, the withdrawal process typically takes approximately 7 to 14 days to complete once initiated."
        metaImage: ethereum-staking.png
        link: "https://www.nuxian.ch/vaults/pool1/"
        addresses:
          - "0x14A022Ef11A41770757652aA6607eF9D7e270b72"
        builder:
          logo: /static/stvaults-products-overview/product/node-operator/prodelegators.svg
          name: Pro-Delegators by Nuxian Labs
          contactLink: "mailto:contact@nuxian.ch"
        nodeOperator:
          logo: /static/stvaults-products-overview/product/node-operator/prodelegators.svg
          name: Pro-Delegators by Nuxian Labs
          contactLink: "mailto:contact@nuxian.ch"
        isDefiWrapper: true
        isDvtCluster: false
      - id: "5"
        slug: prodelegators-liquid-staking
        title: Liquid Staking 90%
        description: "When staking in this vault, users instantly receive a liquid token representing their staked position. This allows them to trade, swap, or utilize their assets in DeFi protocols while simultaneously earning staking rewards. Users maintain full flexibility: they can request to withdraw their original ETH at any time, with the standard Ethereum network processing period of approximately 7 to 14 days applying to the final redemption."
        metaImage: liquid-staking.png
        link: "https://www.nuxian.ch/vaults/pool2/"
        addresses:
          - "0xa24852f6bd28e260ad1b1225afda5c8cda6824b9"
        builder:
          logo: /static/stvaults-products-overview/product/node-operator/prodelegators.svg
          name: Pro-Delegators by Nuxian Labs
          contactLink: "mailto:contact@nuxian.ch"
        nodeOperator:
          logo: /static/stvaults-products-overview/product/node-operator/prodelegators.svg
          name: Pro-Delegators by Nuxian Labs
          contactLink: "mailto:contact@nuxian.ch"
        isDefiWrapper: true
        isDvtCluster: false
  - title: Institutional staking products
    description: "Non-custodial staking solutions designed for institutional users, combining isolated vault architecture, flexible role management, and the freedom to choose a trusted node operator"
    withoutCurator: true
    products:
      - id: "2"
        slug: northstake-svm
        title: Northstake Staking Vault Manager (SVM)
        description: "Northstake SVM is a full tooling suite that gives complete operational control over Lido V3 stVaults across node operators, reporting, compliance monitoring, and liquidity execution."
        metaImage: northstake-svm.png
        link: "https://www.northstake.dk/svm"
        addresses:
          - "0x3eda1e756Ba9aC0217Ac8fc5db4C5E9a8486d9c4"
        builder:
          logo: /static/stvaults-products-overview/product/node-operator/northstake.svg
          name: Northstake
          contactLink: "mailto:info@northstake.dk"
        nodeOperator:
          logo: /static/stvaults-products-overview/product/various.svg
          name: Various
        blogPost:
          image: "{{blog_url}}/content/images/size/w1000/2026/02/Lido-V3---Northstake-post.png"
          title: "Lido V3 & Northstake: Simplifying Institutional Ethereum Staking with stVaults"
          description: "Learn how Northstake is using Lido and stVaults to simplify Ethereum staking for institutional clients"
          link: "{{blog_url}}/lido-v3-northstake-simplifying-institutional-ethereum-staking-with-stvaults/"
        isDefiWrapper: false
        isDvtCluster: false
      - id: "3"
        slug: ebunker-stvaults
        title: Ebunker stVaults
        description: "Ebunker stVaults is an institutional-grade, non-custodial staking solution designed specifically for ETH holders, DAOs, and professional funds who demand absolute asset isolation and operational transparency. By leveraging an isolated vault architecture, we eliminate the contagion risks inherent in shared pools, allowing users to retain full sovereignty over their withdrawal credentials while benefiting from Lido's premier liquid staking ecosystem. As a global Top 10 node operator managing over 400,000 ETH, Ebunker ensures unrivaled security through a fail-safe infrastructure featuring multi-client diversity, DVT integration via SSV and Obol, and 100% air-gapped key generation. This combination of bespoke risk management and battle-tested performance makes Ebunker stVaults the most secure gateway for sophisticated capital to maximize efficiency on the Ethereum consensus layer."
        metaImage: ebunker-stvaults.png
        link: "https://www.ebunker.io/dashboard?type=lido"
        addresses: []
        builder:
          logo: /static/stvaults-products-overview/product/node-operator/ebunker.svg
          name: Ebunker
          contactLink: "mailto:tech@ebunker.io"
        nodeOperator:
          logo: /static/stvaults-products-overview/product/node-operator/ebunker.svg
          name: Ebunker
          contactLink: "mailto:tech@ebunker.io"
        isDefiWrapper: false
        isDvtCluster: false
      - id: "7"
        slug: luganodes-stvaults
        title: Luganodes stVaults
        description: "Luganodes stVaults is an institutional-grade, compliance-ready ETH staking solution for asset managers, DAOs, and enterprise treasuries that need strong security and operational flexibility. Built on Lido V3, it allows institutions to deploy dedicated, segregated validator infrastructure under a non-custodial framework. By resolving the traditional trade-off between pooled risk and liquidity, Luganodes lets clients retain full control over their vault parameters, apply compliance controls at the contract level, and optionally mint stETH to access the broader DeFi ecosystem. As a DAO-ratified Professional Operator, Luganodes delivers proven reliability through geographically distributed, Tier IV bare-metal data centers with a 100% validator participation rate. Backed by independent SOC 2 Type II and ISO/IEC 27001 certifications, and further protected by institutional slashing insurance through Chainproof at no additional cost, Luganodes stVaults deliver an institutional-grade standard for Ethereum staking."
        metaImage: luganodes.png
        link: "https://www.luganodes.com/product/lido-v3-stvaults"
        addresses: []
        builder:
          logo: /static/stvaults-products-overview/product/node-operator/luganodes.svg
          name: Luganodes
          contactLink: "https://t.me/rishi_luganodes"
        nodeOperator:
          logo: /static/stvaults-products-overview/product/node-operator/luganodes.svg
          name: Luganodes
          contactLink: "https://t.me/rishi_luganodes"
        isDefiWrapper: false
        isDvtCluster: false
  - title: Bridged staking strategies
    description: "Staking infrastructure for networks and protocols that put bridged ETH to work, channeling Ethereum staking rewards back into their ecosystems and users"
    withoutCurator: true
    products:
      - id: "6"
        slug: linea-yield-boost
        title: Yield Boost
        description: "Yield Boost converts idle bridged ETH into productive capital. ETH bridged to Linea is partially staked on Ethereum mainnet via Lido V3. Staking rewards fund ecosystem incentives which is more sustainable than what token emissions typically provide. Users keep full custody, with the same withdrawal guarantees and the same UX."
        metaImage: yield-boost.png
        addresses:
          - "0x2df8CCb91c80c9600EA9436b1f940c48cC008ca7"
        builder:
          logo: /static/stvaults-products-overview/product/curator-or-owner/linea.svg
          name: Linea
        nodeOperator:
          logo: /static/stvaults-products-overview/product/node-operator/consensys.svg
          name: Consensys Staking
        blogPost:
          image: "{{blog_url}}/content/images/size/w1000/2025/08/Linea-native-2.png"
          title: "Linea and Lido V3: Bringing Native Yield to L2s"
          description: "Linea and Lido are bringing “Native Yield” - directly integrated Ethereum staking rewards to L2s."
          link: "{{blog_url}}/linea-lido-bringing-native-yield-to-l2s/"
        isDefiWrapper: false
        isDvtCluster: false
---
