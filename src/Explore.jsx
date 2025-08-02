import { useEffect, useState } from "react";

function Explore() {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const response = await fetch(
          "https://api.rarible.org/v0.1/items/byCollection?collection=ETHEREUM:0xF6793dA657495ffeFF9Ee6350824910Abc21356C"
        );
        const data = await response.json();
        setNfts(data.items || []);
      } catch (error) {
        console.error("Error fetching NFTs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNFTs();
  }, []);

  if (loading) return <p>Loading NFTs...</p>;

  return (
    <div>
      <h1>Explore NFTs</h1>
      <ul>
        {nfts.map((nft) => (
          <li key={nft.id}>
            <p>{nft.meta?.name || "Unnamed NFT"}</p>
            {nft.meta?.content?.[0]?.url && (
              <img
                src={nft.meta.content[0].url}
                alt={nft.meta?.name}
                width="150"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Explore;
