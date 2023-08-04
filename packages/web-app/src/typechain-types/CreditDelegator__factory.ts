/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "./common";
import type {
  CreditDelegator,
  CreditDelegatorInterface,
} from "./CreditDelegator";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "dao",
        type: "address",
      },
      {
        internalType: "address",
        name: "where",
        type: "address",
      },
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "permissionId",
        type: "bytes32",
      },
    ],
    name: "DaoUnauthorized",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "APPROVE_DELEGATION_PERMISSION_ID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "BORROW_AAVE_PERMISSION_ID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "BORROW_AND_TRANSFER_AAVE_PERMISSION_ID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "REGISTER_ACTIONS_PERMISSION_ID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UPGRADE_PLUGIN_PERMISSION_ID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "WITHDRAWN_AAVE_PERMISSION_ID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_currentPending",
    outputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_lastExecuted",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "actions",
    outputs: [
      {
        internalType: "address",
        name: "dao",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowFailureMap",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "executed",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
      {
        internalType: "address",
        name: "_delegatee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "approveDelegation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_interestRateMode",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "_referralCode",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "_onBehalfOf",
        type: "address",
      },
    ],
    name: "borrow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_interestRateMode",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "_referralCode",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "_onBehalfOf",
        type: "address",
      },
      {
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
    ],
    name: "borrowAndTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "dao",
    outputs: [
      {
        internalType: "contract IDAO",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_actionsId",
        type: "uint256",
      },
    ],
    name: "executeActions",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IDAO",
        name: "_dao",
        type: "address",
      },
      {
        internalType: "address",
        name: "_poolAddress",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pluginType",
    outputs: [
      {
        internalType: "enum IPlugin.PluginType",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "poolAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_dao",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct IDAO.Action[]",
        name: "_actions",
        type: "tuple[]",
      },
      {
        internalType: "uint256",
        name: "_allowFailureMap",
        type: "uint256",
      },
    ],
    name: "registerActions",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "supply",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "withdrawn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a0604052306080523480156200001557600080fd5b506200002062000026565b620000e8565b600054610100900460ff1615620000935760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff9081161015620000e6576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b6080516127606200012060003960008181610778015281816107b801528181610d8001528181610dc00152610e3c01526127606000f3fe6080604052600436106101565760003560e01c80635ee5937e116100c1578063a415bcad1161007a578063a415bcad14610434578063baafa1a714610454578063c4b0d2941461046c578063c9c4bfca146104a0578063d2ce6173146104d4578063e219e2ea146104f4578063f2b9fdb81461051457600080fd5b80635ee5937e146102dc57806364f85da31461031057806383240f83146103445780639572dce1146103b5578063a2a0c890146103cc578063a35538b31461040057600080fd5b806341de68301161011357806341de683014610235578063485cc955146102515780634a9cccd4146102715780634f1ef2861461029157806352d1902d146102a45780635c60da1b146102c757600080fd5b806301ffc9a71461015b57806314bd81c9146101905780631755ff21146101b25780633659cfe6146101e05780633b9cf7a1146102005780634162169f14610220575b600080fd5b34801561016757600080fd5b5061017b610176366004611b5f565b610534565b60405190151581526020015b60405180910390f35b34801561019c57600080fd5b506101b06101ab366004611b89565b610586565b005b3480156101be57600080fd5b5061012d546101d3906001600160a01b031681565b6040516101879190611ba2565b3480156101ec57600080fd5b506101b06101fb366004611bcb565b61076e565b34801561020c57600080fd5b506101b061021b366004611be8565b610836565b34801561022c57600080fd5b506101d36109e6565b34801561024157600080fd5b5060006040516101879190611c2a565b34801561025d57600080fd5b506101b061026c366004611c52565b6109f5565b34801561027d57600080fd5b506101b061028c366004611c9b565b610b25565b6101b061029f366004611da1565b610d76565b3480156102b057600080fd5b506102b9610e2f565b604051908152602001610187565b3480156102d357600080fd5b506101d3610edd565b3480156102e857600080fd5b506102b97fd8bcbf84b888bfec72f67836c946eb7051ab9ddd593e9d251c723a305be20e9a81565b34801561031c57600080fd5b506102b97fbc0814bc48b2f269ee2f42615aea102665357ccfcc4855666c535fbef5d1f7bb81565b34801561035057600080fd5b5061038e61035f366004611b89565b61012e602052600090815260409020805460028201546003909201546001600160a01b03909116919060ff1683565b604080516001600160a01b0390941684526020840192909252151590820152606001610187565b3480156103c157600080fd5b506102b961012f5481565b3480156103d857600080fd5b506102b97f0f8f4163883218089d28879d6faa8d5efc466171e639af2a1a3959744df01a4081565b34801561040c57600080fd5b506102b97f31179a4201b4660e3028f366d21a4fe54fd3da1ab320d3db097d71ed9a4e2ae081565b34801561044057600080fd5b506101b061044f366004611e33565b610eec565b34801561046057600080fd5b50610130546102b99081565b34801561047857600080fd5b506102b97f2291aa5372a9c8e823a5e8cbccfe52c2097a7c28520510fda45eeaf0803982d581565b3480156104ac57600080fd5b506102b97f821b6e3a557148015a918c89e5d092e878a69854a2d1a410635f771bd5a8a3f581565b3480156104e057600080fd5b506101b06104ef366004611e92565b611092565b34801561050057600080fd5b506101b061050f366004611ed3565b611154565b34801561052057600080fd5b506101b061052f366004611f60565b61124d565b60006001600160e01b0319821663041de68360e41b148061056557506001600160e01b031982166352d1902d60e01b145b8061058057506301ffc9a760e01b6001600160e01b03198316145b92915050565b600081815261012e60205260409020600381015460ff16156105e25760405162461bcd60e51b815260206004820152601060248201526f105b1c9958591e48195e1958dd5d195960821b60448201526064015b60405180910390fd5b60005b600182015481101561075657600061070483600101838154811061060b5761060b611f8c565b60009182526020909120600390910201546001850180546001600160a01b03909216918590811061063e5761063e611f8c565b90600052602060002090600302016001015485600101858154811061066557610665611f8c565b9060005260206000209060030201600201805461068190611fa2565b80601f01602080910402602001604051908101604052809291908181526020018280546106ad90611fa2565b80156106fa5780601f106106cf576101008083540402835291602001916106fa565b820191906000526020600020905b8154815290600101906020018083116106dd57829003601f168201915b505050505061158f565b5090508061074d5760405162461bcd60e51b815260206004820152601660248201527522b93937b91032bc32b1baba34b7339030b1ba34b7b760511b60448201526064016105d9565b506001016105e5565b5061012f91909155600301805460ff19166001179055565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036107b65760405162461bcd60e51b81526004016105d990611fdc565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166107e86115fb565b6001600160a01b03161461080e5760405162461bcd60e51b81526004016105d990612028565b61081781611617565b6040805160008082526020820190925261083391839190611650565b50565b60c9547f2291aa5372a9c8e823a5e8cbccfe52c2097a7c28520510fda45eeaf0803982d590610874906001600160a01b031630335b846000366117bb565b604080516001808252818301909252600091816020015b610893611b35565b81526020019060019003908161088b5750506040805160608101825261012d546001600160a01b039081168252600060208301528251898216602482015260448101899052908716606482015292935091908201907f69328decb93fdb59917f0c50856674b0c726498e4b54e9d908efd10636a216d7906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915290528151829060009061095557610955611f8c565b60200260200101819052506109686109e6565b6001600160a01b031663c71bf3248260006040518363ffffffff1660e01b81526004016109969291906120c4565b6000604051808303816000875af11580156109b5573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526109dd919081019061215c565b50505050505050565b60c9546001600160a01b031690565b600054610100900460ff1615808015610a155750600054600160ff909116105b80610a2f5750303b158015610a2f575060005460ff166001145b610a925760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016105d9565b6000805460ff191660011790558015610ab5576000805461ff0019166101001790555b610abe83611877565b61012d80546001600160a01b0319166001600160a01b0384161790558015610b20576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050565b60c9547f0f8f4163883218089d28879d6faa8d5efc466171e639af2a1a3959744df01a4090610b5e906001600160a01b0316303361086b565b60408051600280825260608201909252600091816020015b610b7e611b35565b815260200190600190039081610b765750506040805160608101825261012d546001600160a01b0316815260006020820152815192935091908201907fa415bcad4ee807e8d26cbe960a7206826419851bdd70ea7e943518d65f143cc890610bf2908c908c908c908c908c90602401612261565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152905281518290600090610c3957610c39611f8c565b60200260200101819052506040518060600160405280896001600160a01b03168152602001600081526020017fa9059cbb2ab09eb219583f4a59a5d0623ade346d962bcd4e46b11da047c9049b858a604051602401610c99929190612295565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091529052815182906001908110610ce257610ce2611f8c565b6020026020010181905250610cf56109e6565b6001600160a01b031663c71bf3248260006040518363ffffffff1660e01b8152600401610d239291906120c4565b6000604051808303816000875af1158015610d42573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610d6a919081019061215c565b50505050505050505050565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163003610dbe5760405162461bcd60e51b81526004016105d990611fdc565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610df06115fb565b6001600160a01b031614610e165760405162461bcd60e51b81526004016105d990612028565b610e1f82611617565b610e2b82826001611650565b5050565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610eca5760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c6044820152771b1959081d1a1c9bdd59da0819195b1959d85d1958d85b1b60421b60648201526084016105d9565b506000805160206126e483398151915290565b6000610ee76115fb565b905090565b60c9547f31179a4201b4660e3028f366d21a4fe54fd3da1ab320d3db097d71ed9a4e2ae090610f25906001600160a01b0316303361086b565b604080516001808252818301909252600091816020015b610f44611b35565b815260200190600190039081610f3c5750506040805160608101825261012d546001600160a01b0316815260006020820152815192935091908201907fa415bcad4ee807e8d26cbe960a7206826419851bdd70ea7e943518d65f143cc890610fb8908b908b908b908b908b90602401612261565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152905281518290600090610fff57610fff611f8c565b60200260200101819052506110126109e6565b6001600160a01b031663c71bf3248260006040518363ffffffff1660e01b81526004016110409291906120c4565b6000604051808303816000875af115801561105f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611087919081019061215c565b505050505050505050565b60c9547fbc0814bc48b2f269ee2f42615aea102665357ccfcc4855666c535fbef5d1f7bb906110cb906001600160a01b0316303361086b565b604080516001808252818301909252600091816020015b6110ea611b35565b8152602001906001900390816110e25790505090506040518060600160405280866001600160a01b03168152602001600081526020017fc04a8a10f889571e478e7f36393a72a25c3d1995240c52f39cafde7da43517e5868660405160240161090e929190612295565b60c9547fd8bcbf84b888bfec72f67836c946eb7051ab9ddd593e9d251c723a305be20e9a9061118d906001600160a01b0316303361086b565b60006111996101305490565b90506111aa61013080546001019055565b600081815261012e6020526040812080546001600160a01b0319166001600160a01b0389161781556002810185905560038101805460ff19169055905b85811015611243578160010187878381811061120557611205611f8c565b905060200281019061121791906122ae565b8154600181018355600092835260209092209091600302016112398282612314565b50506001016111e7565b5050505050505050565b61012d5460405163095ea7b360e01b81526001600160a01b038481169263095ea7b39261128292909116908590600401612295565b6020604051808303816000875af11580156112a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112c59190612439565b506040516323b872dd60e01b8152336004820152306024820152604481018290526001600160a01b038316906323b872dd906064016020604051808303816000875af1158015611319573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061133d9190612439565b5061012d5460405163617ba03760e01b81526001600160a01b03848116600483015260248201849052306044830152600060648301529091169063617ba03790608401600060405180830381600087803b15801561139a57600080fd5b505af11580156113ae573d6000803e3d6000fd5b505061012d546040516335ea6a7560e01b8152600093506001600160a01b0390911691506335ea6a75906113e6908690600401611ba2565b6101e060405180830381865afa158015611404573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061142891906124e3565b610100015190506000816001600160a01b03166370a08231306040518263ffffffff1660e01b815260040161145d9190611ba2565b602060405180830381865afa15801561147a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061149e9190612606565b9050816001600160a01b031663095ea7b36114b76109e6565b836040518363ffffffff1660e01b81526004016114d5929190612295565b6020604051808303816000875af11580156114f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115189190612439565b506115216109e6565b604051635ff03ed360e11b81526001600160a01b038481166004830152602482018490526060604483015260006064830152919091169063bfe07da690608401600060405180830381600087803b15801561157b57600080fd5b505af1158015611243573d6000803e3d6000fd5b60006060846001600160a01b031684846040516115ac919061261f565b60006040518083038185875af1925050503d80600081146115e9576040519150601f19603f3d011682016040523d82523d6000602084013e6115ee565b606091505b5091509150935093915050565b6000805160206126e4833981519152546001600160a01b031690565b60c9547f821b6e3a557148015a918c89e5d092e878a69854a2d1a410635f771bd5a8a3f590610e2b906001600160a01b0316303361086b565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff161561168357610b20836118a7565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa9250505080156116dd575060408051601f3d908101601f191682019092526116da91810190612606565b60015b6117405760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201526d6f6e206973206e6f74205555505360901b60648201526084016105d9565b6000805160206126e483398151915281146117af5760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f786044820152681a58589b195555525160ba1b60648201526084016105d9565b50610b20838383611943565b604051637ef7c88360e11b81526001600160a01b0387169063fdef9106906117ef9088908890889088908890600401612631565b602060405180830381865afa15801561180c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118309190612439565b61186f57604051630cb6f8ed60e21b81526001600160a01b038088166004830152808716602483015285166044820152606481018490526084016105d9565b505050505050565b600054610100900460ff1661189e5760405162461bcd60e51b81526004016105d990612685565b6108338161196e565b6001600160a01b0381163b6119145760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084016105d9565b6000805160206126e483398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b61194c836119b7565b6000825111806119595750805b15610b205761196883836119f7565b50505050565b600054610100900460ff166119955760405162461bcd60e51b81526004016105d990612685565b60c980546001600160a01b0319166001600160a01b0392909216919091179055565b6119c0816118a7565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606001600160a01b0383163b611a5f5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084016105d9565b600080846001600160a01b031684604051611a7a919061261f565b600060405180830381855af49150503d8060008114611ab5576040519150601f19603f3d011682016040523d82523d6000602084013e611aba565b606091505b5091509150611ae2828260405180606001604052806027815260200161270460279139611aeb565b95945050505050565b60608315611afa575081611b04565b611b048383611b0b565b9392505050565b815115611b1b5781518083602001fd5b8060405162461bcd60e51b81526004016105d991906126d0565b604051806060016040528060006001600160a01b0316815260200160008152602001606081525090565b600060208284031215611b7157600080fd5b81356001600160e01b031981168114611b0457600080fd5b600060208284031215611b9b57600080fd5b5035919050565b6001600160a01b0391909116815260200190565b6001600160a01b038116811461083357600080fd5b600060208284031215611bdd57600080fd5b8135611b0481611bb6565b600080600060608486031215611bfd57600080fd5b8335611c0881611bb6565b9250602084013591506040840135611c1f81611bb6565b809150509250925092565b6020810160038310611c4c57634e487b7160e01b600052602160045260246000fd5b91905290565b60008060408385031215611c6557600080fd5b8235611c7081611bb6565b91506020830135611c8081611bb6565b809150509250929050565b61ffff8116811461083357600080fd5b60008060008060008060c08789031215611cb457600080fd5b8635611cbf81611bb6565b955060208701359450604087013593506060870135611cdd81611c8b565b92506080870135611ced81611bb6565b915060a0870135611cfd81611bb6565b809150509295509295509295565b634e487b7160e01b600052604160045260246000fd5b6040516101e081016001600160401b0381118282101715611d4457611d44611d0b565b60405290565b604051601f8201601f191681016001600160401b0381118282101715611d7257611d72611d0b565b604052919050565b60006001600160401b03821115611d9357611d93611d0b565b50601f01601f191660200190565b60008060408385031215611db457600080fd5b8235611dbf81611bb6565b915060208301356001600160401b03811115611dda57600080fd5b8301601f81018513611deb57600080fd5b8035611dfe611df982611d7a565b611d4a565b818152866020838501011115611e1357600080fd5b816020840160208301376000602083830101528093505050509250929050565b600080600080600060a08688031215611e4b57600080fd5b8535611e5681611bb6565b945060208601359350604086013592506060860135611e7481611c8b565b91506080860135611e8481611bb6565b809150509295509295909350565b600080600060608486031215611ea757600080fd5b8335611eb281611bb6565b92506020840135611ec281611bb6565b929592945050506040919091013590565b60008060008060608587031215611ee957600080fd5b8435611ef481611bb6565b935060208501356001600160401b0380821115611f1057600080fd5b818701915087601f830112611f2457600080fd5b813581811115611f3357600080fd5b8860208260051b8501011115611f4857600080fd5b95986020929092019750949560400135945092505050565b60008060408385031215611f7357600080fd5b8235611f7e81611bb6565b946020939093013593505050565b634e487b7160e01b600052603260045260246000fd5b600181811c90821680611fb657607f821691505b602082108103611fd657634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b6163746976652070726f787960a01b606082015260800190565b60005b8381101561208f578181015183820152602001612077565b50506000910152565b600081518084526120b0816020860160208601612074565b601f01601f19169290920160200192915050565b60006060808301600084526020828186015281875180845260808701915060808160051b880101935082890160005b8281101561214657888603607f19018452815180516001600160a01b03168752858101518688015260409081015190870188905261213388880182612098565b96505092840192908401906001016120f3565b5050505050604093909301939093525092915050565b600080604080848603121561217057600080fd5b83516001600160401b038082111561218757600080fd5b818601915086601f83011261219b57600080fd5b81516020828211156121af576121af611d0b565b8160051b6121be828201611d4a565b928352848101820192828101908b8511156121d857600080fd5b83870192505b8483101561224d578251868111156121f65760008081fd5b8701603f81018d136122085760008081fd5b84810151612218611df982611d7a565b8181528e8b83850101111561222d5760008081fd5b61223c828883018d8601612074565b8452505091830191908301906121de565b9990920151989a9899505050505050505050565b6001600160a01b0395861681526020810194909452604084019290925261ffff166060830152909116608082015260a00190565b6001600160a01b03929092168252602082015260400190565b60008235605e198336030181126122c457600080fd5b9190910192915050565b601f821115610b2057600081815260208120601f850160051c810160208610156122f55750805b601f850160051c820191505b8181101561186f57828155600101612301565b813561231f81611bb6565b81546001600160a01b0319166001600160a01b03919091161781556020828101356001838101919091559060028301604085013536869003601e1901811261236657600080fd5b850180356001600160401b0381111561237e57600080fd5b803603848301131561238f57600080fd5b6123a38161239d8554611fa2565b856122ce565b6000601f8211600181146123d957600083156123c157508382018601355b600019600385901b1c1916600184901b178555611087565b600085815260209020601f19841690835b82811015612409578685018901358255938801939089019088016123ea565b50848210156124285760001960f88660031b161c198885880101351681555b50505050841b909301905550505050565b60006020828403121561244b57600080fd5b81518015158114611b0457600080fd5b60006020828403121561246d57600080fd5b604051602081018181106001600160401b038211171561248f5761248f611d0b565b6040529151825250919050565b80516001600160801b03811681146124b357600080fd5b919050565b805164ffffffffff811681146124b357600080fd5b80516124b381611c8b565b80516124b381611bb6565b60006101e082840312156124f657600080fd5b6124fe611d21565b612508848461245b565b81526125166020840161249c565b60208201526125276040840161249c565b60408201526125386060840161249c565b60608201526125496080840161249c565b608082015261255a60a0840161249c565b60a082015261256b60c084016124b8565b60c082015261257c60e084016124cd565b60e082015261010061258f8185016124d8565b908201526101206125a18482016124d8565b908201526101406125b38482016124d8565b908201526101606125c58482016124d8565b908201526101806125d784820161249c565b908201526101a06125e984820161249c565b908201526101c06125fb84820161249c565b908201529392505050565b60006020828403121561261857600080fd5b5051919050565b600082516122c4818460208701612074565b6001600160a01b038681168252851660208201526040810184905260806060820181905281018290526000828460a0840137600060a0848401015260a0601f19601f85011683010190509695505050505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b602081526000611b04602083018461209856fe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220e586775267c1cd2a6e3e696c9764a0ad8ea1b623d54decb51a9c4a2fb41390cb64736f6c63430008110033";

type CreditDelegatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CreditDelegatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CreditDelegator__factory extends ContractFactory {
  constructor(...args: CreditDelegatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CreditDelegator> {
    return super.deploy(overrides || {}) as Promise<CreditDelegator>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CreditDelegator {
    return super.attach(address) as CreditDelegator;
  }
  override connect(signer: Signer): CreditDelegator__factory {
    return super.connect(signer) as CreditDelegator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CreditDelegatorInterface {
    return new utils.Interface(_abi) as CreditDelegatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CreditDelegator {
    return new Contract(address, _abi, signerOrProvider) as CreditDelegator;
  }
}