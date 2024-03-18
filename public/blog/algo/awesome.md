- Sunday algorithm: fast string matching
- Tarjan's algorithm: find strongly connected components

[Consistent Hashing](https://web.stanford.edu/class/cs168/l/l1.pdf)

When bucket size changes, almost all objects need to relocate. Consistent
hashing hashes both object and server, objects are assigned to the first bucket
to the right of objects on the hash index ring. Fast successor operation can be
implemented using RB-tree.
