var intersection = function(nums1, nums2,m,n) {
    
    let i=0,j=0;
    while(i<m && j<n){
        if(nums1[i]>nums2[j]){
            j++
        }
        else if(nums1[i]<nums2[j]){
             i++
    }
        else{
            console.log(nums1[i]+" ");
            i++;
            j++;
        }
    }
};
var nums1 = [4,9,5];
var nums2 = [9,4,9,8,4]
var m=nums1.length;
var n=nums2.length;
nums1.sort();
nums2.sort();
var arr1=[...new Set(nums1)]
var arr2=[...new Set(nums2)]
intersection(arr1,arr2,m,n)