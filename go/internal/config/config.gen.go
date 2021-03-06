// file generated. see /config.
package config

import (
	"encoding/json"

	"berty.tech/berty/v2/go/pkg/bertytypes"
)

var Config bertytypes.Config

// FIXME: make it more nicely
func init() {
	input := `
{
  "berty": {
    "contacts": {
      "betabot": {
        "link": "https://berty.tech/id#key=CiBYAkJkmvcCZOl2hWuSK34arbzSpcpQGLowIvi7ZsEdyRIgMmKs-zHKksC74gjOfSj5puOAQQGWNhsC8o9gEtQ8zrQ\u0026name=BetaBot",
        "name": "BetaBot",
        "description": "Official BetaBot"
      },
      "betabot-dev": {
        "link": "https://berty.tech/id#key=CiBQHH6a84AHwdahXR6NQcOxTKjUHeqLdQfIAzxAYSoD1xIgT-tFTYrU-tD55bYgaXbBNTlqTHubq-_Qb8ksv2bSH9o\u0026name=BetaBot%20Dev",
        "name": "BetaBot Dev",
        "description": "Dev BetaBot"
      },
      "testbot": {
        "link": "https://berty.tech/id#key=CiCTp8uUnxfqlZaebiJEEt_zY-NUnHAWJl4jbGpB7rXsbxIg6_Grg-eLJ-GtqrdARnoTY35k7AI_g5AxqyFVe2elIaA\u0026name=TestBot",
        "name": "TestBot",
        "description": "Official TestBot"
      },
      "testbot-dev": {
        "link": "https://berty.tech/id#key=CiAxSP1RYrv4yi7PsQZtqFH9fepMiqDD1M7y1aIZAzMmghIg_fXVz1J-HfCd6gtRlUN0GsWiIlfgVPamj7lgFIUqfOA\u0026name=TestBot%20Dev",
        "name": "TestBot Dev",
        "description": "Dev TestBot"
      }
    },
    "conversations": {
      "dev-test": {
        "link": "https://berty.tech/group#invite=CiAbnwpJK0_Zg-pNE9bpcWKeI2J-RmCVuM7uNXQv7MEizBIg2EBkfV2eRm_SP5GX04H8zf9cpjsPTvMAcSeob3-GQsAaQPLmDQSArZfQ8QdANRX4uCrgQuivtF41pWnRYKEqDI_b1xb8mHExObf4RF9gcs4ktyMYVD6ZpCROyZfCg0f1GAAgAw\u0026name=Dev+Test",
        "name": "Dev Test",
        "description": "Simple Conversation with Replication"
      }
    }
  },
  "p2p": {
    "rdvp": [
      {
        "maddr": "/ip4/51.159.21.214/tcp/4040/p2p/QmdT7AmhhnbuwvCpa5PH1ySK9HJVB82jr3fo1bxMxBPW6p"
      },
      {
        "maddr": "/ip4/51.159.21.214/udp/4040/quic/p2p/QmdT7AmhhnbuwvCpa5PH1ySK9HJVB82jr3fo1bxMxBPW6p"
      },
      {
        "maddr": "/ip4/51.15.25.224/tcp/4040/p2p/12D3KooWHhDBv6DJJ4XDWjzEXq6sVNEs6VuxsV1WyBBEhPENHzcZ"
      },
      {
        "maddr": "/ip4/51.15.25.224/udp/4040/quic/p2p/12D3KooWHhDBv6DJJ4XDWjzEXq6sVNEs6VuxsV1WyBBEhPENHzcZ"
      },
      {
        "maddr": "/ip4/51.75.127.200/tcp/4141/p2p/12D3KooWPwRwwKatdy5yzRVCYPHib3fntYgbFB4nqrJPHWAqXD7z"
      },
      {
        "maddr": "/ip4/51.75.127.200/udp/4141/quic/p2p/12D3KooWPwRwwKatdy5yzRVCYPHib3fntYgbFB4nqrJPHWAqXD7z"
      }
    ],
    "relayHack": [
      "/ip4/51.159.21.214/udp/4040/quic/p2p/QmdT7AmhhnbuwvCpa5PH1ySK9HJVB82jr3fo1bxMxBPW6p",
      "/ip4/51.15.25.224/udp/4040/quic/p2p/12D3KooWHhDBv6DJJ4XDWjzEXq6sVNEs6VuxsV1WyBBEhPENHzcZ",
      "/ip4/51.75.127.200/udp/4141/quic/p2p/12D3KooWPwRwwKatdy5yzRVCYPHib3fntYgbFB4nqrJPHWAqXD7z"
    ]
  }
}`
	err := json.Unmarshal([]byte(input), &Config)
	if err != nil {
		panic(err)
	}
}
