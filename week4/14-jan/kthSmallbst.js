var kthSmallest = function(root, k) {
    const values = []


    function dfs(root, values) {
        if(root.left) dfs(root.left, values)
        values.push(root.val)
        if(root.right) dfs(root.right, values)
    }

    dfs(root, values)

    return values[k-1]
};